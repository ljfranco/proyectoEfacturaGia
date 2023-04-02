# proyectoEfacturaGia

Aplicacion para crear archivos de importacion para GIA

A continuación, se presenta la descripción del proyecto para la creación de una aplicación que permita cargar archivos XML de facturas electrónicas y generar archivos CSV para importarlos al sistema contable. La aplicación también incluye una funcionalidad para crear equivalencias entre los productos de la empresa y los productos de las facturas.

Funcionalidades

//TODO - Carga de archivos XML de facturas electrónicas
//TODO - Generación de archivos CSV para importarlos al sistema contable
Creación de equivalencias entre los productos de la empresa y los productos de las facturas
Guardado de información de proveedores y productos en una base de datos SQLite

Tecnologías utilizadas

Node.js para el backend
Express.js para el manejo de rutas
Multer para la carga de archivos
SQLite como base de datos
HTML, CSS y JavaScript para el frontend

Instrucciones de instalación y uso

Clonar el repositorio desde Github.
Instalar las dependencias con el comando npm install.
Crear un archivo .env en la raíz del proyecto con la siguiente estructura:
PORT=3000
Crear la base de datos ejecutando el archivo database.js con el comando node database.js.
Iniciar la aplicación con el comando npm start.
Abrir un navegador web y acceder a la URL http://localhost:3000 para utilizar la aplicación.

Autores

Leonardo Franco
