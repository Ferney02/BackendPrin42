
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const usuariosController = require("../controllers/usuariosController");

//Creacion de un usuario -- api/usuarios
router.post(
    "/",[
        check("nombre", "El nombre debe ser obligatorio").not().isEmpty(),
        check("email", "El correo debe ser obligatorio o un email valido").isEmail(),
        check("password", " La contraseña debe tener minimo 8 caracteres").isLength({
            min: 8,
        }),
    ],  
    usuariosController.crearUsuario
);
module.exports = router;
