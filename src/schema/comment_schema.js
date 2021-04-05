const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    comentario: {type: String, unique: true}
});

// Registra o modelo no banco de dados

module.exports = mongoose.model('Comentarios', comentarioSchema);



