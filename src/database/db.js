const mysql = require('mysql2/promise');
const config = require('../../config.json');

const pool = mysql.createPool(config.DB);

async function query(sql, params) {
    try {
        let [results] = await pool.query(sql, params)
        return results;
    } finally {
        pool.end()
    }  
}

module.exports = {
    query
}