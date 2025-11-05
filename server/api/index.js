const express = require("express");
const cors = require("cors");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverless = require("serverless-http");

const app = express();
app.use(cors());
app.use(express.json());

let db = null;
const dbPath = path.join(__dirname, "data.db");

// initialize database once (serverless best practice)
const initDb = async () => {
  if (!db) {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  }
};
initDb();

// ------------------- Routes -------------------

// Signup
app.post("/api/signup", async (req, res) => {
  await initDb();
  const { username, password } = req.body;

  try {
    const existingUser = await db.get(
      `SELECT username FROM user WHERE username = ?`,
      [username]
    );

    if (existingUser) {
      return res.status(401).json({ error_msg: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.run(`INSERT INTO user (username, password) VALUES (?, ?)`, [
      username,
      hashedPassword,
    ]);

    res.json({ msg: "User Created" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error_msg: "Server Error" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  await initDb();
  const { username, password } = req.body;

  try {
    const user = await db.get(
      `SELECT * FROM user WHERE username = ?`,
      [username]
    );

    if (!user) {
      return res.status(401).json({ error_msg: "User Not Found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error_msg: "Password Incorrect" });
    }

    const jwtToken = jwt.sign({ username }, "secret_key");
    res.json({ jwtToken });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error_msg: "Server Error" });
  }
});

// Root
app.get("/api", (req, res) => {
  res.send("Backend running on Vercel 🚀");
});

// Export as serverless handler
module.exports = app;
module.exports.handler = serverless(app);
