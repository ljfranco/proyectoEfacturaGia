const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/database.js');
const controllersdb = require('../db/controllers/databaseControllers.js');

const app = express();
const port = 3000;

// Configuración de middleware para analizar JSON
app.use(express.json());

// Ruta para cargar archivos XML
app.post('/cargar-xml', (req, res) => {
    // Aquí puedes agregar el código para cargar los archivos XML y generar los archivos CSV
    res.send('Archivos generados');
});

app.use(bodyParser.json());

// Ruta para crear una nueva equivalencia de producto
app.post('/equivalencias', (req, res) => {
    const { proveedor, codigo_proveedor, producto, codigo_producto } = req.body;

    db.run(
        'INSERT INTO equivalencias (proveedor, codigo_proveedor, producto, codigo_producto) VALUES (?, ?, ?, ?)',
        [proveedor, codigo_proveedor, producto, codigo_producto],
        (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error al crear la equivalencia de producto');
            } else {
                res.send('Equivalencia de producto creada correctamente');
            }
        }
    );
});

//Ruta para crear proveedores

app.post('/proveedores', controllersdb.addProvider);

//Ruta para crear productos equivalentes
app.post('/productos-equivalentes', controllersdb.addProductequivalent);


//Ruta para crear productos NS
app.post('/productos-ns', controllersdb.addProductNS);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
