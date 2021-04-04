const mongoose = require('mongoose')
const config = require('../config')

function connect() {
    mongoose.connect(config.mongo.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Conectado com BD")
        })
        .catch((erro) => {
            console.log(`Erro ${erro}`)
        })
}

module.exports = connect()