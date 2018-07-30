module.exports = {
  port: process.env.PORT || '3000',
  db: {
    database: process.env.DB_NAME || 'bhtcloud',
    user: process.env.DB_USER || 'bhtcloud',
    password: process.env.DB_PASS || '12345',
    options: {
      host: process.env.HOST || 'localhost',
      dialect: process.env.DIALECT || 'sqlite',
      storage: '../database/bhtcloud.sqlite'
    }
  }
};
