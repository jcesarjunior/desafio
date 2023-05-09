import express from 'express'
import hbs from 'express-handlebars'

const app = express()

import conn from './db/conn.js'

//Models
import User from './models/User.js'
import RuralProducer from './models/RuralProducer.js'
import Plantation from './models/Plantation.js'


//Routes
import userRoutes from './routes/userRoutes.js'


app.use("/", userRoutes);



conn
    //.sync({ force: true})
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))