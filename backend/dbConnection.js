const mysql = require("mysql2");

const db_connection = mysql
    .createConnection({
        host: "67.23.238.105", // HOST NAME
        user: "vanderson_projetos", // USER NAME
        database: "vanderson_faculdade", // DATABASE NAME
        password: "@84246160Van", // DATABASE PASSWORD
    })
    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;