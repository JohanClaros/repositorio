$(function() { 
var dialog, form; 
var table = $('#example').DataTable({ 
"ajax" : "../servicios/producto/listar", 
"columns" : [ { 
"data" : "codigo" 
}, { 
"data" : "nombre" 
}, { 
"data" : "precio" 
}, {
"data" : "descripcion"
}, {
"data" : "imagen"
}, {
"data" : "categoria"	
}] 
}); 
$('#example tbody').on('click', 'tr', function() { 
if ($(this).hasClass('selected')) { 
$(this).removeClass('selected'); 
} else { 
table.$('tr.selected').removeClass('selected'); 
$(this).addClass('selected'); 
} 
}); 
function editar(accion) { 
var codigo = "0"; 
var nombre = ""; 
var precio = "";
var descripcion = "";
var imagen = "";
var categoria = "";
if (accion != "Adicionar") { 
codigo = table.row('.selected').data().codigo; 
nombre = table.row('.selected').data().nombre; 
precio = table.row('.selected').data().precio; 
descripcion = table.row('.selected').data().descripcion;
imagen = table.row('.selected').data().imagen;
categoria = table.row('.selected').data().categoria;
} 
document.getElementById("accion").value = accion; 
document.getElementById("codigo").value = codigo; 
document.getElementById("nombre").value = nombre; 
document.getElementById("precio").value = precio; 
document.getElementById("descripcion").value = descripcion;
document.getElementById("imagen").value = imagen;
document.getElementById("categoria").value = categoria;
dialog.dialog("open"); 
} 
function ejecutar() { 
var accion = document.getElementById("accion").value; 
$("#boton").html('<span class="ui-button-text">' + accion + '</span>'); 
if (accion == "Adicionar") { 
adicionarProducto(); 
} 
if (accion == "Modificar") { 
modificarProducto(); 
} 
if (accion == "Eliminar") { 
eliminarProducto(); 
} 
} 
function adicionarProducto() { 
// Collect input from html page 
var nombre = document.getElementById("nombre").value; 
var precio = document.getElementById("precio").value; 
var descripcion = document.getElementById("descripcion").value;
var imagen = document.getElementById("imagen").value;
var categoria = document.getElementById("categoria").value;
var r = new REST.Request(); 
r.setURI(REST.apiURL + "/producto/adicionar"); 
r.setMethod("POST"); 
r.setContentType("application/json"); 
r.setEntity({ 
nombre : nombre, 
precio : precio,
descripcion : descripcion,
imagen : imagen,
categoria : categoria
}); 
r.execute(function(status, request, entity) { 
mostrarRespuesta(entity); 
}); 
} 
function modificarProducto() { 
// Collect input from html page 
var codigo = document.getElementById("codigo").value; 
var nombre = document.getElementById("nombre").value; 
var precio = document.getElementById("precio").value;  
var descripcion = document.getElementById("descripcion").value;
var imagen = document.getElementById("imagen").value;
var categoria = document.getElementById("categoria").value; 
var r = new REST.Request(); 
r.setURI(REST.apiURL + "/producto/modificar/" + codigo); 
r.setMethod("PUT"); 
r.setContentType("application/json"); 
r.setEntity({ 
nombre : nombre, 
precio : precio, 
descripcion : descripcion,
imagen : imagen,
categoria : categoria
}); 
r.execute(function(status, request, entity) { 
mostrarRespuesta(entity); 
}); 
} 
function eliminarProducto() { 
// Collect input from html page 
var codigo = document.getElementById("codigo").value; 
var r = new REST.Request(); 
r.setURI(REST.apiURL + "/producto/eliminar/" + codigo); 
r.setMethod("DELETE"); 
r.execute(function(status, request, entity) { 
mostrarRespuesta(entity); 
}); 
} 
function mostrarRespuesta(entity){ 
table.ajax.reload(); 
dialog.dialog("close"); 
document.getElementById("dialogo-mensaje").innerHTML = "<p>" 
+ entity.mensaje + "</p>"; 
$("#dialogo-mensaje").dialog({ 
modal : true, 
buttons : { 
Ok : function() { 
$(this).dialog("close"); 
} 
} 
}); 
} 
dialog = $("#dialog-form").dialog({ 
autoOpen : false, 
height : 360, 
width : 640, 
modal : true, 
buttons : { 
"Ejecutar": { 
id: 'boton', 
text: 'Ejecutar', 
click: function () { 
ejecutar(); 
} 
}, 
Cancel : function() { 
dialog.dialog("close"); 
} 
}, 
close : function() { 
form[0].reset(); 
} 
}); 
form = dialog.find("form").on("submit", function(event) { 
event.preventDefault(); 
ejecutar(); 
}); 
$("#adicionar").button().on("click", function() { 
editar('Adicionar'); 
}); 
$("#modificar").button().on("click", function() { 
editar('Modificar'); 
}); 
$("#eliminar").button().on("click", function() { 
editar('Eliminar'); 
}); 
}); 
