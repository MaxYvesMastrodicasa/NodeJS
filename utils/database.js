import mysql from 'mysql2';

//création pool de connexion mysql
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_nodejs_siteweb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

export default pool.promise();

