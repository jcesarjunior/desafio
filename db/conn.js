import { Sequelize } from "sequelize"

const sequelize = new Sequelize('farm', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
})

try{
    sequelize.authenticate()
    console.log('Conectado com sucesso !')
}catch(err){
    console.log(`Não foi possível conectar: ${err}`)
}

export default sequelize