import express from 'express'
import hbs from 'express-handlebars'

const app = express()

import conn from './db/conn.js'

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))