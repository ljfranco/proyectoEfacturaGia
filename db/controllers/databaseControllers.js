const db = require('../database.js');


//Controlador para agregar proveedores
function addProvider(req, res) {
    const { codigo_proveedor, nombre } = req.body;

    // Verificar si el proveedor ya existe en la base de datos
    db.get('SELECT codigo_proveedor FROM proveedores WHERE codigo_proveedor = ?', [codigo_proveedor], function (err, row) {
        if (row) {
            console.log(`El proveedor con código ${codigo_proveedor} ya existe en la base de datos.`);
            res.status(500).send(`El proveedor con código ${codigo_proveedor} ya existe en la base de datos.`);
        } else {
            // Insertar el proveedor en la base de datos
            db.run('INSERT INTO proveedores (codigo_proveedor, nombre) VALUES (?, ?)', [codigo_proveedor, nombre], function (err) {
                if (err) {
                    return console.error(err.message);
                }
                console.log(`Proveedor con código ${codigo_proveedor} agregado a la base de datos.`);
                res.send(`Proveedor con código ${codigo_proveedor} agregado a la base de datos.`);
            });
        }
    });
}

//Controlador para agregar productos equivalentes
function addProductequivalent(req, res) {
    const { codigo_producto, nombre_producto, codigo_proveedor, codigo_productoNS } = req.body;
    //Verificar si el producto ya existe en la base de datos
    db.get('SELECT codigo_producto, codigo_proveedor FROM productos_proveedor WHERE codigo_producto = ? and codigo_proveedor = ?', [codigo_producto, codigo_proveedor], function (err, row) {
        if (row) {
            console.log(`El producto con código ${codigo_producto} ya existe en la base de datos.`);
            res.status(500).send(`El producto con código ${codigo_producto} del proveedor ${codigo_proveedor} ya existe en la base de datos.`);
        } else {
            // Insertar el producto en la base de datos
            db.run('INSERT INTO productos_proveedor (codigo_producto, nombre_producto, codigo_proveedor, codigo_productoNS) VALUES (?, ?, ?, ?)', [codigo_producto, nombre_producto, codigo_proveedor, codigo_productoNS], function (err) {
                if (err) {
                    return console.error(err.message);
                }
                console.log(`Producto con código ${codigo_producto} agregado a la base de datos.`);
                res.send(`Producto con código ${codigo_producto} agregado a la base de datos.`);
            });
        }
    })
}

//controlador para agregar productos NS
function addProductNS(req, res) {
    const { codigo_producto, producto } = req.body;
    //Verificar si el producto ya existe en la base de datos
    db.get('SELECT codigo_producto FROM productosNS WHERE codigo_producto = ?', [codigo_producto], function (err, row) {
        if (row) {
            console.log(`El producto con código ${codigo_producto} ya existe en la base de datos.`);
            res.status(500).send(`El producto con código ${codigo_producto} ya existe en la base de datos.`);
        } else {
            // Insertar el producto en la base de datos
            db.run('INSERT INTO productosNS (codigo_producto, producto) VALUES (?, ?)', [codigo_producto, producto], function (err) {
                if (err) {
                    return console.error(err.message);
                }
                console.log(`Producto con código ${codigo_producto} agregado a la base de datos.`);
                res.send(`Producto con código ${codigo_producto} agregado a la base de datos.`);
            });
        }
    })
}

function getProviders(req, res) {
    db.all('SELECT * FROM proveedores', function (err, rows) {
        if (err) {
            return console.error(err.message);
        }
        res.send(rows);
    });
}

function getProductsequivalent(req, res) {
    db.all('SELECT * FROM productos_proveedor', function (err, rows) {
        if (err) {
            return console.error(err.message);
        }
        res.send(rows);
    });
}

function getProductsNS(req, res) {
    db.all('SELECT * FROM productosNS', function (err, rows) {
        if (err) {
            return console.error(err.message);
        }
        res.send(rows);
    });
}







module.exports = { addProvider, addProductequivalent, addProductNS, getProviders, getProductsequivalent, getProductsNS };