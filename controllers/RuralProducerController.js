import RuralProducer from '../models/RuralProducer.js'
import Plantation from '../models/Plantation.js'
import sequelize from '../db/conn.js'

class RuralProducerController {

    //show all
    static async showAllRuralProducer(req, res) {
        res.send('teste de chegada222')
    }

    static async registerRuralProducer(req, res) {

        const producerName = req.body.producerName
        const cpf = req.body.cpf
        const cnpj = req.body.cnpj
        const farmName = req.body.farmName
        const city = req.body.city
        const state = req.body.state
        const totalArea = req.body.totalArea
        const totalAreaArable = req.body.totalAreaArable
        const totalAreaVegetation = req.body.totalAreaVegetation
        const plantedCrops = req.body.plantation

        const ruralProducer = {
            producerName,
            cpf,
            cnpj,
            farmName,
            city,
            state,
            totalArea,
            totalAreaArable,
            totalAreaVegetation
        }


        const plantacoes = [
            {
                plantedCrops: 'Milho',
                RuralProducerId: ruralProducer.id
            },
            {
                plantedCrops: 'Soja',
                RuralProducerId: ruralProducer.id
            },
            {
                plantedCrops: 'Cana-de-açúcar',
                RuralProducerId: ruralProducer.id
            },
        ]

        sequelize.transaction(async (transacao) => {
            const PR = await RuralProducer.create(ruralProducer, { transaction: transacao });
            const PL = await Plantation.bulkCreate(plantacoes, { transaction: transacao });

            return PR;
        }).then((usuarioCriado) => {
            console.log('Usuário criado com sucesso:', usuarioCriado);
        }).catch((erro) => {
            console.error('Erro ao criar usuário:', erro);
        });
    }

}


export default RuralProducerController