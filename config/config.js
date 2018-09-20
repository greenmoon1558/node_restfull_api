require('dotenv').config();

let CONFIG = {} 

CONFIG.app          = process.env.APP   || 'development';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mongo';
CONFIG.db_host      = process.env.DB_HOST       || 'ds163162.mlab.com';
CONFIG.db_port      = process.env.DB_PORT       || '63162';
CONFIG.db_name      = process.env.DB_NAME       || 'authdb';
CONFIG.db_user      = process.env.DB_USER       || 'admin';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'alisa1396';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;
