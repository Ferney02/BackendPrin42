const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");


exports.autenticarusuario = async (req, res) => {
    //Revision si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    const { email, password } = req.body;

    try {
        //Verificacion si hay usuarios registrados
        let usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no se encuentra registrado' })
        }

        //Verificacion del password
        const passCorecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorecto) {
            return res.status(400).json({ msg: 'La contraseña es incorrecta' })
        }

        //Se firma el token si no se encuentran errores
        const payload = {
            usuario: { id: usuario.id },
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 43200, //Aproximado de una hora
            },
            (error, token) => {
                if (error) throw error;
                //mensajde de confirmacion
                res.json({ token });
            }
        );

    } catch (error) {
        console.log("Error")
        console.log(error);
        res.status(400).send("Se encontro un error")
    }
};

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findByID(req.usuario.id);
        res.json({ usuario });
    }
    catch (error) {
        res.status(400).json({ msg: "Hubo un error" });
    }
}