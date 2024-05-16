const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");


exports.crearUsuario = async (req, res) => {
    //Revision si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    const { email, password } = req.body;

    try {
        //Verificacion que el usuario sea unico
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: "El usuario ya existe" })
        }
        //Si no existe el usuario, se crea este
        usuario= new Usuario(req.body);

        usuario.password = await bcryptjs.hash(password, 8);
        //Se guarda el usuario //Este usuario, va en minuscula ya que se intancio previamente arriba con un new Usuario
        await usuario.save();


        //Se firma el token si no se encuentran errores
        const payload = {
            usuario: { id: usuario.id },
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 3600, //Aproximado de una hora
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
