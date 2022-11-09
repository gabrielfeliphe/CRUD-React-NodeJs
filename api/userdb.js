require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)

getUser = async function () {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM usuarios", (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

updateUser = async function () {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM usuarios", (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}


deleteUser = async function () {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM usuarios", (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}


insertUser = async function () {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM usuarios", (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}


module.exports = { getUser, updateUser, deleteUser, insertUser };