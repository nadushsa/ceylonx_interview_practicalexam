const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practicaltest'
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            db.query(
                "INSERT INTO users (username, password) VALUES (?, ?)",
                [username, hash],
                (err, result) => {
                    if (err) {
                        res.status(500).json({ error: err });
                    } else {
                        res.status(200).json({ message: "User registered successfully!" });
                    }
                }
            );
        }
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (err, isMatch) => {
                        if (err) {
                            res.status(500).json({ error: err });
                        } else {
                            if (isMatch) {
                                res.status(200).json({ message: "Login successful!" });
                            } else {
                                res.status(401).json({ message: "Wrong password!" });
                            }
                        }
                    });
                } else {
                    res.status(404).json({ message: "User not found!" });
                }
            }
        }
    );
});

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
