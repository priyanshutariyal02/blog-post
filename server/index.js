import express from "express";
// import mysql from "mysql";
import db from "./config/db.js";
import cors from "cors";
const PORT = 5000;
const app = express();

app.use(cors());
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "blog"
// });

app.use(express.json());


// get data
app.get("/create", (req, res) => {
    const q = "SELECT * FROM posts";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

// post data
app.post("/create", (req, res) => {
    const q = "INSERT INTO posts (`title`, `desc`, `user_name`) VALUES (?);";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.user_name
    ];
    db.query(q, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Data added successfully!");
    })
})

//delete data
app.delete("/create/:id", (req, res) => {
    const BlogId = req.params.id;
    const q = "DELETE FROM posts WHERE id = ?";
    db.query(q, [BlogId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Blog successfully deleted!");
    })
})



app.listen(PORT, () => {
    console.log("Server is Connected! PORT: " + PORT);
})