const express = require("express");
const app = express();
const mysql = require("mysql2");


const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "usersprueba"
    }
);

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
});

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})