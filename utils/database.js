import mysql from 'mysql2';

//création pool de connexion mysql
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tp_nodejs_siteweb',
});

export default pool.promise();