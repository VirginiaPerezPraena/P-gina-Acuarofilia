"use strict";

$(document).ready(function () {
    let tablaHTML;
    $("#todo").on("click",function () {
        $.ajax({
            url: 'http://127.0.0.1:8080/filtrar',
            method: 'GET',
            data: {},
            success: function (respuesta){
                let respuestaJSON = JSON.parse(respuesta);
                tablaHTML = crearTabla(respuestaJSON);
                $("#contenido").html(tablaHTML);
            }
        })
    });
            $("#marin").on("click",function () {
                $.ajax({
                    url: 'http://127.0.0.1:8080/agua',
                    method: 'GET',
                    data: {},
                    success: function (respuesta){
                        let respuestaJSON = JSON.parse(respuesta);
                        tablaHTML = crearTabla(respuestaJSON);
                        $("#contenido").html(tablaHTML);
                    }
                })
            });
            $("#dulce").on("click",function () {
                 $.ajax({
                     url: 'http://127.0.0.1:8080/dulce',
                     method: 'GET',
                     data: {},
                     success: function (respuesta){
                         let respuestaJSON = JSON.parse(respuesta);
                         tablaHTML = crearTabla(respuestaJSON);
                         $("#contenido").html(tablaHTML);
                     }
                 })
             });
        });
function crearTabla(datos) {
    let tabla = '<table class="table table-dark table-striped" border=2 style="border-colapse:colapse; text-align: center; width:100%; margin-left:auto; margin-right:auto;">';
    tabla += '<thead class="thead-dark"><tr style="width:10%"><th>Imagen</th> <th>Nombre</th> <th>Familia</th> <th>Tipo de Agua</th> <th>Zona de nado</th> <th>Ph</th><th style="width:45%">Descripción</th></tr></thead>';
    tabla += '<tbody>';
    $.each(datos, function () {
        let especieImagen = this.image;
        let especieNombre = this.species;
        let especieFamilia = this.familia;
        let especieAgua = this.agua;
        let especieNado = this.zonaNado;
        let especiePh = this.ph;
        let especieDescripcion = this.descripcion;
       
       tabla += `<tr><td><img style="width: 270px; height:160px" src="${especieImagen}"/></td><td style="padding-top:3.5%;">${especieNombre}</td><td style="padding-top:3.5%;">${especieFamilia}</td><td style="padding-top:3.5%;">${especieAgua}</td><td style="padding-top:3.5%;">${especieNado}</td><td style="padding-top:3.5%;">${especiePh}</td><td style="padding-top:3.5%;">${especieDescripcion}</td></tr>`;
    })
    tabla += '</tbody></table>';
    return tabla;
}
