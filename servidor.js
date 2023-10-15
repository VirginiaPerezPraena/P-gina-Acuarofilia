"use strict";

const http = require("http");
const url = require("url");
const {MongoClient} = require("mongodb");
const urlConexion = "mongodb://localhost:27017";
const cliente = new MongoClient(urlConexion);

//

http.createServer(function (peticion, respuesta) {
let urlBase = url.parse(peticion.url, true);
let pathname = urlBase.pathname;
respuesta.setHeader('Access-Control-Allow-Origin', '*');
respuesta.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE');

    if (pathname == '/filtrar') {
        let datosPost = "";
        peticion.on('data', function (data) {
            datosPost += data;
        }).on('end', function () {
            let datos;
            let parametros;
            if (peticion.method === 'GET') {
                datos = urlBase.query;
            } else {
                datos = datosPost;
            }
            parametros = new URLSearchParams(datos);
            let db = "acuario";
            let coleccion = "especies";
            let filtro = {};
            consultar(db, coleccion, filtro, respuesta)
                .then(respuesta)
                .catch(console.error)
        });
    }
    if (pathname == '/agua') {
        let datosPost = "";
        peticion.on('data', function (data) {
            datosPost += data;
        }).on('end', function () {
            let datos;
            let parametros;
            if (peticion.method === 'GET') {
                datos = urlBase.query;
            } else {
                datos = datosPost;
            }
            parametros = new URLSearchParams(datos);
            let db = "acuario";
            let coleccion = "especies";
            let filtro = { agua : "Marino"};
            consultar(db, coleccion, filtro, respuesta).then(respuesta).catch(console.error)
        });
    }
    
    if (pathname == '/dulce') {
        let datosPost = "";
        peticion.on('data', function (data) {
            datosPost += data;
        }).on('end', function () {
            let datos;
            let parametros;
            if (peticion.method === 'GET') {
                datos = urlBase.query;
            } else {
                datos = datosPost;
            }
            parametros = new URLSearchParams(datos);
            let db = "acuario";
            let coleccion = "especies";
            let filtro = { agua : "Dulce"};
            consultar(db, coleccion, filtro, respuesta).then(respuesta).catch(console.error)
        });
    }

}).listen(8080);

async function consultar(db, coleccion, filtro, respuesta) {await cliente.connect();
    console.log("Conexión correcta");
    const dbo = cliente.db(db);
    const resultado = await
    dbo.collection(coleccion).find(filtro).toArray();
    respuesta.end(JSON.stringify(resultado));
    return JSON.stringify(resultado);
}