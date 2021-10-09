import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost'
const MYSQL_PORT = process.env.MYSQL_PORT || 3306
const MYSQL_DB = process.env.MYSQL_DB || 'db_dokter'
const MYSQL_USER = process.env.MYSQL_USER || 'root'
const MYSQL_PASS = process.env.MYSQL_PASS || 'root'

const MYSQL = {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    db: MYSQL_DB,
    user: MYSQL_USER,
    pass: MYSQL_PASS
}

const TOKEN_EXPIRETIME = process.env.TOKEN_EXPIRETIME || 3600
const TOKEN_ISSUER = process.env.TOKEN_ISSUER || 'stringtokenissuer'
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'stringtokensecret'


const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const SERVER = {
    host: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        expireTime: TOKEN_EXPIRETIME,
        issuer: TOKEN_ISSUER,
        secret: TOKEN_SECRET,
    }
};

const config = {
    mysql: MYSQL,
    server: SERVER
};

export default config;
