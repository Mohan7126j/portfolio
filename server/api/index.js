import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database setup
const dbPath =
  process.env.VERCEL_ENV === "production"
    ? "/tmp/data.db"
    : path.join(__dirname, "data.db");

let db;

const initializeDB = async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Create table if not exists
  await db.exec(`
    CREATE TABLE IF NOT EXISTS user (
      username TEXT PRIMARY KEY,
      password TEXT
    );
  `);
};

await initializeDB();

// Routes
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userExists = await db.get("SELECT username FROM user WHERE username = ?", [username]);

  if (userExists) {
    return res.status(400).json({ error_msg: "User Already Exists" });
  }

  await db.run("INSERT INTO user (username, password) VALUES (?, ?)", [username, hashedPassword]);
  res.json({ msg: "User Created" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await db.get("SELECT * FROM user WHERE username = ?", [username]);

  if (!user) return res.status(404).json({ error_msg: "User Not Found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ error_msg: "Password Incorrect" });

  const jwtToken = jwt.sign({ username }, "secret_key");
  res.json({ jwtToken });
});

// For Vercel serverless
export default app;
