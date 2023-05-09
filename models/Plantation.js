import { DataTypes } from "sequelize"
import db from '../db/conn.js'
import RuralProducer from './RuralProducer.js'

const Plantation = db.define('Plantation', {
    plantedCrops: {
        type: DataTypes.STRING,
        require: true,
    },    
})

Plantation.belongsTo(RuralProducer)
RuralProducer.hasMany(Plantation)

export default Plantation