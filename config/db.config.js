'use strict';
const dbCreds = require('./db.credentials.js');
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: dbCreds.HOST,
    user: dbCreds.USER,
    password: dbCreds.PASSWORD,
    database: dbCreds.DB,
});
dbConn.connect(function (err) {
    if (err) throw err;
    console.log('Database Connected!');
    initDb();
});
const initDb = () => {
    dbConn.query(`CREATE  TABLE IF NOT EXISTS \`employees\` (  \`id\` BIGINT UNSIGNED AUTO_INCREMENT,  \`first_name\` VARCHAR(255) NOT NULL,  \`last_name\` VARCHAR(255) NOT NULL,  \`email\` VARCHAR(255) NOT NULL,  \`phone\` VARCHAR(50) NOT NULL,  \`organization\` VARCHAR(255) NOT NULL,  \`designation\` VARCHAR(100) NOT NULL,  \`salary\` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,  \`status\` TINYINT UNSIGNED DEFAULT 0,  \`is_deleted\` TINYINT UNSIGNED DEFAULT 0,  \`created_at\` DATETIME NOT NULL,  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  PRIMARY KEY (\`id\`))ENGINE = InnoDB;`);
}
module.exports = dbConn;
