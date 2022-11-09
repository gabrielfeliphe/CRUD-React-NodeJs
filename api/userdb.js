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

insertUser = async function (email, endereco, telefone, cnpj, cidade, nome) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO usuarios(email,endereco,telefone,cnpj,cidade,nome) VALUES ('${email}','${endereco}','${telefone}','${cnpj}','${cidade}','${nome}')`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

deleteUser = async function (id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM usuarios WHERE ID = '${id}'`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

updateUser = async function (email, endereco, telefone, cnpj, cidade, nome, id) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE usuarios SET email = '${email}', endereco = '${endereco}', telefone = '${telefone}', cnpj = '${cnpj}', cidade = '${cidade}', nome = '${nome}' WHERE ID = ${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

module.exports = { getUser, updateUser, deleteUser, insertUser };