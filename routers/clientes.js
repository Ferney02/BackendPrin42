
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteCrontoller')

//Aqui va la ruta crud
//El put para modificar
//El delete es para eliminar 
//El post es para agregar
router.post('/', ClienteController.AgregarCliente);
//El metodo get es para mostrar lo deseado, muestra en la 
router.get('/', ClienteController.mostrarCliente);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarUnCliente);
//router.patch('/:id', ClienteController.modificarCliente);
router.put('/:id', ClienteController.actualizarCliente);
//router.put('/:id', ClienteController.ActualizarCliente);


module.exports = router;