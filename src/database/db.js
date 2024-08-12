const mysql = require('mysql2/promise');
const config = require('../../config.json');

const pool = mysql.createPool(config.DB);

async function query(sql, params) {
    let [results] = await pool.query(sql, params)
    return results;
}

module.exports = {
    query
}