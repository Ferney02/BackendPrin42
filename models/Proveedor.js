
const mongoose = require('mongoose');

//El modelo a realizar debe ser igual a la base de datos.

//El Schema es de esquema
const proveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    cantidad: {
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
    pais: {
        type: String,
        required: true
    },

}, { versionkey: false });

module.exports = mongoose.model('Proveedor', proveedorSchema)





