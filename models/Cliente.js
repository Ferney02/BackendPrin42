

const mongoose = require('mongoose');

//El modelo a realizar debe ser igual a la base de datos.

//El Schema es de esquema
const clienteSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    ndocumento: {
        type: Number,
        required: true
    },
    correo: {
//Probar el type email aqui, para ver si funciona y poder validarlo.
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },

}, { versionkey: false });

module.exports = mongoose.model('Cliente', clienteSchema)





