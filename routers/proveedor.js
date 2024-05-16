
const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController')

//Aqui va la ruta crud
//El put para modificar
//El delete es para eliminar 
//El post es para agregar
router.post('/', proveedorController.AgregarProveedor);
//El metodo get es para mostrar lo deseado, muestra en la 
router.get('/', proveedorController.mostrarProveedor);
router.get('/:id', proveedorController.mostrarUnProveedor);
router.delete('/:id', proveedorController.eliminarUnProveedor);
//router.patch('/:id', proveedorController.modificarProveedor);
router.put('/:id', proveedorController.actualizarProveedor);
//router.put('/:id', proveedorController.ActualizarProveedor);


module.exports = router;