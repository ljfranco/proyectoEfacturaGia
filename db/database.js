const sqlite3 = require('sqlite3').verbose();

// Crea una nueva base de datos en el archivo 'facturas.db'
const db = new sqlite3.Database('./db/database.db');


// Crea la tabla 'productos' si no existe
db.run(`
    CREATE TABLE IF NOT EXISTS productosNS (
    codigo_producto TEXT NOT NULL PRIMARY KEY,
    producto TEXT NOT NULL
    )
`);

// Crear tabla de proveedores
db.run(`CREATE TABLE IF NOT EXISTS proveedores (
    codigo_proveedor TEXT NOT NULL PRIMARY KEY,
    nombre TEXT NOT NULL
    )`);

// Crear tabla de productos del proveedor
db.run(`CREATE TABLE IF NOT EXISTS productos_proveedor (
    codigo_producto TEXT NOT NULL PRIMARY KEY,
    nombre_producto TEXT NOT NULL,
    codigo_proveedor TEXT NOT NULL,
    codigo_productoNS TEXT NOT NULL,
    FOREIGN KEY(codigo_proveedor) REFERENCES proveedores(codigo_proveedor),
    FOREIGN KEY(codigo_productoNS) REFERENCES productosNS(codigo_producto)
    )`);

module.exports = db;
