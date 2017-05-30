$(function() { 
var dialog, form; 
var table = $('#example').DataTable({ 
"ajax" : "../servicios/categoria/listar", 
"columns" : [ { 
"data" : "codigo" 
}, { 
"data" : "nombre" 
}, { 
"data" : "estado" 	
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
var estado = "";
if (accion != "Adicionar") { 
codigo = table.row('.selected').data().codigo; 
nombre = table.row('.selected').data().nombre; 
estado = table.row('.selected').data().estado; 
} 
document.getElementById("accion").value = accion; 
document.getElementById("codigo").value = codigo; 
document.getElementById("nombre").value = nombre; 
document.getElementById("estado").value = estado; 
dialog.dialog("open"); 
} 
function ejecutar() { 
var accion = document.getElementById("accion").value; 
$("#boton").html('<span class="ui-button-text">' + accion + '</span>'); 
if (accion == "Adicionar") { 
adicionarCategoria(); 
} 
if (accion == "Modificar") { 
modificarCategoria(); 
} 
if (accion == "Eliminar") { 
eliminarCategoria(); 
} 
} 
function adicionarCategoria() { 
// Collect input from html page 
var nombre = document.getElementById("nombre").value; 
var estado = document.getElementById("estado").value; 
var r = new REST.Request(); 
r.setURI(REST.apiURL + "/categoria/adicionar"); 
r.setMethod("POST"); 
r.setContentType("application/json"); 
r.setEntity({ 
nombre : nombre, 
estado : estado
}); 
r.execute(function(status, request, entity) { 
mostrarRespuesta(entity); 
}); 
} 
function modificarCategoria() { 
// Collect input from html page 
var codigo = document.getElementById("codigo").value; 
var nombre = document.getElementById("nombre").value; 
var estado = document.getElementById("estado").value;   
var r = new REST.Request(); 
r.setURI(REST.apiURL + "/categoria/modificar/" + codigo); 
r.setMethod("PUT"); 
r.setContentType("application/json"); 
r.setEntity({ 
nombre : nombre, 
estado : estado
}); 
r.execute(function(status, request, entity) { 
mostrarRespuesta(entity); 
}); 
} 
function eliminarCategoria() { 
// Collect input from html page 
var codigo = document.getElementById("codigo").value; 
var r = new REST.Request(); 
r.setURI(REST.apiURL + "/categoria/eliminar/" + codigo); 
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
