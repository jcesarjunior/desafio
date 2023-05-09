import { DataTypes } from "sequelize"
import db from '../db/conn.js'
import User from './User.js'

const RuralProducer = db.define('RuralProducer', {
    producerName: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    cpf: {
        type: DataTypes.STRING       
    },
    cnpj: {
        type: DataTypes.STRING
    },
    farmName: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    totalArea: {
        type: DataTypes.DECIMAL(10,4)
    },
    totalAreaArable: {
        type: DataTypes.DECIMAL(10,4)
    },
    totalAreaVegetation: {
        type: DataTypes.DECIMAL(10,4)
    }  
})

RuralProducer.belongsTo(User)
User.hasMany(RuralProducer)

export default RuralProducer