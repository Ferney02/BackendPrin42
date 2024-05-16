const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");
//Creacion del servidor
const app = express();
//Configuracion del puerto en una variable
const port = process.env.port || 5050;
//Conectar con base de datos
conectarBD();
//Habilitacion del cors
app.use(cors());
//Habilitacion de express json
app.use(express.json({ extended: true }));


//Se crean las rutas
app.use("/api/usuarios", require("./routers/usuarios"));
app.use("/api/auth", require("./routers/auth"));
app.use("/api/clientes", require("./routers/clientes"));
app.use("/api/proveedors", require("./routers/proveedor"));

//Configuracion del servidor
app.listen(port, () => {
    console.log("Conectado al servidor");
});


