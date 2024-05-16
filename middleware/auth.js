const jwt = require("jsonwebtoken");

module.exports= function(req, res, next){

//Lectura del token del header
const token = req.header ("x-auth-token");

//Revision del token
if(!token){
    return res.status(400).json({msg: "permiso no valido, no tiene un token"})
}

//Validacion del token
try {
    const cifrado = jwt.verify(token.process.env.SECRETA)
    req.usuario = cifrado.usuario;
    next();
} catch (error) {
    res.status(400).json({msg: " Token no valido "});
}
}