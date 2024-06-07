import mysql from 'mysql';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const db = mysql.createConnection({
    host: process.env.REACT_APP_HOST_NAME,
    user: process.env.REACT_APP_USER_NAME,
    password: process.env.REACT_APP_USER_PASSWORD,
    database: process.env.REACT_APP_DATABASE_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

export default db;
