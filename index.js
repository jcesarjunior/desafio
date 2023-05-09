import express from 'express'
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


import conn from './db/conn.js'

//Models
import User from './models/User.js'
import RuralProducer from './models/RuralProducer.js'
import Plantation from './models/Plantation.js'




//Routes
import userRoutes from './routes/userRoutes.js'




app.use("/register", userRoutes);
app.use("/", userRoutes);



conn
    //.sync({ force: true})
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))