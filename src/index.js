/* llamadas a puro servidor */


const express = require('express');
const app = express();
const morgan = require('morgan');//sacar las respuestas del servidor y que se nos ponga en consola
const { route } = require('./routes/rutas');
//Cada vez que nosotros tengamos una dependencia y la vayamos a querer utilizar,
//vamos a crear constantes dentro de nuestro index
//AQUÍ SOLO ESTAMOS CONFIGURANDO NUESTRO SERVIDOR


//MORGAN --> supongamos que queremos estar parceando todos estos errores que nos está saliendo, para eso nos servira morgan
//a morgan le podemos dar un paramtro

//CONFIGURACIONES

//dentro de estas configuraciones podríamos configurar el puerto como si nosotros estuvieramos creando una variable pero variable como de entorno
//Recordatorio: el 'app' es como si fuera todo nuestro entorno, toda nuestra aplicacion. Entonces yo puedo crear una variable
//dentro de app
//app como variable global
app.set('port', 3000);

// uno de los MIDDLEWARES. Morgan no es el unico que podamos a utilizar
app.use(morgan('dev'));
app.use(express.json()); //modulo express: tiene un modulo que nos puede servir para parsear toda la info que venga desde los jsons 

//RUTAS---------------------**********
app.use(require('./routes/rutas'))
//como tendremos varias rutas, es recomendable hacer una carpeta para las rutas
//ruta básica de como haremos las rutas 
// la diagonal como página principal
/* app.get('/', (req, res) => {
    res.send('PASÓ');
});
app.get('/home', (req, res) => {
    res.send('Estás en el HOME');
});
app.get('/zapatos', (req, res) => {
    res.send('Estás en el lista de zapatos');
}); */

//ademas de mandar texto plano (con un send), pudieramos mandar un json. De send a json
/* app.get('/', (req, res) => {
    res.json({"name":"John Doe"});
}); */

//Ahora ya podemos decir esto: empezando servidor
app.listen(app.get('port'));
console.log("Mi Primer Servidor");

//PERO yo quiero leer mi aplicacion desde un puerto
//para poder accesar a mi servidor desde un explorador, entonces diremos app.listen(3000); '3000' por qué?