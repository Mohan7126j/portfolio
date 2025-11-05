const express = require("express");
const cors = require("cors"); 
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors()); 
app.use(express.json())

let db = null;

const dbPath = path.join(__dirname, "data.db");
const initialDbAndServer = async () =>{
    try{
            db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        app.listen(5000, ()=>{
        console.log("Server Running at https//:localhost:5000/")
    });


    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

initialDbAndServer()

app.post("/signup/", async (request, response) =>{
    const {username, password} = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const isUserExixts = await db.get(`SELECT username FROM user WHERE username = '${username}'`)
    if(isUserExixts === undefined){
        const addUserQuery = `INSERT INTO user VALUES('${username}', '${hashedPassword}');`
        await db.run(addUserQuery)
        response.send({
            "msg" : "created"
        })
    }else{
        response.status(401)
        response.send({
            "error_msg": "User Already Exists"
        });
    }
    
})

app.post("/login/", async (request, response) => {
    const {username, password} = request.body
    const user = await db.get(`SELECT * FROM user WHERE username = '${username}'`)
    if(user === undefined){
        response.status(401)
        response.send({
            "error_msg" : "User Not Found"
        })
    }else{
        const hashedPassword = user.password
        isPasswordCorrect = await bcrypt.compare(password, hashedPassword)

        if(isPasswordCorrect){
            // genrate jwtToken
            const jwtToken = await jwt.sign(username, "screat key");
            response.send({
                "jwtToken" : jwtToken
            });
        }else{
            response.status(401)
            response.send({
                "error_msg" : "Password incorrect"
            })
        }
    }
})