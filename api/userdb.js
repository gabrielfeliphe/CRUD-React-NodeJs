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

insertUser = async function (email,senha,cep) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO usuarios(email,senha,cep) VALUES ('${email}','${senha}','${cep}')`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

deleteUser = async function (email) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM usuarios WHERE email = '${email}'`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

updateUser = async function (email,senha,cep,id) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE usuarios SET email = '${email}', senha = '${senha}', cep = '${cep}' WHERE ID = ${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

module.exports = { getUser, updateUser, deleteUser, insertUser };