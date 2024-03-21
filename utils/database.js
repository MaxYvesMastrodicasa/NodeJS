import mysql from 'mysql2';

const sqlPlug = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tp_nodejs_siteweb',
});

export default sqlPlug.promise();