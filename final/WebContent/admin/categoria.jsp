<jsp:include page="../portal/headerges.jsp"></jsp:include>
<jsp:include page="../portal/menuusuario.jsp"></jsp:include>
<div class="container theme-showcase" role="main">

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
pageEncoding="ISO-8859-1"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> 
<title>Insert title here</title> 
<!-- This will include the whole javascript file including ajax handling --> 
<script lang="javascript" src="../rest-api.js"></script> 
<link rel="stylesheet" 
href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> 
<script type="text/javascript" 
src="https://code.jquery.com/jquery-1.12.0.min.js"></script> 
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script> 
<script type="text/javascript" 
src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script> 
<link rel="stylesheet" 
href="https://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css"> 
<link rel="stylesheet" 
href="css/estilo.css"> 
<script type="text/javascript" src="../js/categoria.js"></script> 
</head> 
<body> 
<h1>GESTION DE CATEGORIAS</h1> 
<div style="float: right;"> 
<input type="button" value="Adicionar" id="adicionar" /> 
<input type="button" value="Modificar" id="modificar" /> 
<input type="button" value="Eliminar" id="eliminar" /> 
</div> 
<table id="example" class="display" cellspacing="0" width="100%"> 
<thead> 
<tr> 
<th>Codigo</th> 
<th>Nombre</th> 
<th>Estado</th> 
</tr> 
</thead> 
<tfoot> 
<tr> 
<th>Codigo</th> 
<th>Nombre</th> 
<th>Estado</th>  
</tr> 
</tfoot> 
</table> 
<div id="dialogo-mensaje" title="Gestión de Categorias"> 
</div> 
<div id="dialog-form" title="Forma Producto"> 
<p class="validateTips">Todos los campos son requeridos.</p> 
<form> 
<fieldset> 
<input type="hidden" name="accion" id="accion" value="" /> 
<input type="hidden" name="codigo" id="codigo" value="" /> 

<label for="nombre">Nombre</label> <input type="text" name="nombre" 
id="nombre" value="" class="text ui-widget-content ui-corner-all" /> 

<label for="estado">Estado</label> <input type="text" name="estado" 
id="estado" value="" class="text ui-widget-content ui-corner-all" /> 


<!— 
Allow form submission with keyboard without duplicating 
The dialog button 
--> 
<input type="submit" tabindex="-1" 
style="position: absolute; top: -1000px"> 
</fieldset> 
</form> 
</div> 
</body> 
</html> 

</div> <!-- /container -->
<jsp:include page="../portal/footerges.jsp"></jsp:include>
