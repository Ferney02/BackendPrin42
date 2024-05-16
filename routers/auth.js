
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

//Autenticacion del usuario -- //api/auth
router.post(
    "/", [
    check("email", "Digite un email valido").isEmail(),
    check("password", "La contraseña debe de tener minimo 8 caracteres").isLength({
        min: 8,
    }),
],
    authController.autenticarusuario
);

router.get("/", auth, authController.usuarioAutenticado);
module.exports = router;