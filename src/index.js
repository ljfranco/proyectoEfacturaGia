const express = require('express');
//const bodyParser = require('body-parser');
//const db = require('../db/database.js');
const controllersdb = require('../db/controllers/databaseControllers.js');

const app = express();
const port = 3000;

// Configuración de middleware para analizar JSON
app.use(express.json());


//Ruta para crear proveedores
app.post('/proveedores', controllersdb.addProvider);

//Ruta para crear productos equivalentes
app.post('/productos-equivalentes', controllersdb.addProductequivalent);


//Ruta para crear productos NS
app.post('/productos-ns', controllersdb.addProductNS);

//Ruta para obtener proveedores
app.get('/proveedores', controllersdb.getProviders);

//Ruta para obtener productos equivalentes
app.get('/productos-equivalentes', controllersdb.getProductsequivalent);

//ruta para obtener productos NS
app.get('/productos-ns', controllersdb.getProductsNS);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
