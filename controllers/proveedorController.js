//Exportar modelo clientes

const Proveedor = require('../models/Proveedor');


//La funcion para agregar un cliente
exports.AgregarProveedor = async (req, res) => {

    try {

        let Proveedores = new Proveedor(req.body)
        await Proveedores.save();
        res.send(Proveedores);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el prove')
    }
}


//Funcion para mostrar proveedor
exports.mostrarProveedor = async (req, res) => {

    try {
        const proveedores = await Proveedor.find();
        res.json({ proveedores });
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar el provedor')
    }
}



//Mostrar el cliente

exports.mostrarUnProveedor = async (req, res) => {
    try {
        let proveedores = await Proveedor.findById(req.params.id);

        if (!proveedores) {
            res.status(404).json({ msg: "No se encuentra el proveedor con ese ID" });
        }

        res.send(proveedores);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar el proveedor en la basde de datos');
    }
}



//funcion para eliminar
exports.eliminarUnProveedor = async (req, res) => {
    try {
        //Aqui busca el id buscado
        let proveedores = await Proveedor.findById(req.params.id);

        //Verifica si no existe y si es el caso muestra el mensaje
        if (!proveedores) {
            res.status(404).json({ msg: "El prove con ese ID no existe" });
            return
        }

        await Proveedor.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El prove fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el proveedor en la base de datos');
    }
};



//Modificar un cliente
/*exports.modificarProveedor = async (req, res) => {
    try {
        let proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proveedor) {
            return res.status(404).send('Proveedor no encontrado');
        }
        res.json(proveedor)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el proveedor');
    }
}*/

exports.actualizarProveedor = async (req, res) => {
    try {
        const { nombre, producto, cantidad, correo, telefono, pais } = req.body
        let proveedor = await Proveedor.findById(req.params.id);

        if (!proveedor) {
            res.status(404).json({ msg: "el prove no existe" });
            return
        }
        proveedor.nombre = nombre;
        proveedor.producto = producto;
        proveedor.cantidad = cantidad;
        proveedor.correo = correo;
        proveedor.telefono = telefono;
        proveedor.pais = pais;

        proveedor = await Proveedor.findOneAndUpdate({ _id: req.params.id }, proveedor, { mew: true });
        res.json(proveedor);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar un proveedor');
    }
}


/*exports.ActualizarProveedores = async(req, res) => {
    try {
        let proveedor = await Proveedor.findOneAndUpdate(
            {_id: res.params.id}, req.body);

            if(!proveedor) res.status(404).send("Provee no encontrado");
            else
            res.json(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).sned("Hubo un error al actualizar el prove");
        
    }
}*/