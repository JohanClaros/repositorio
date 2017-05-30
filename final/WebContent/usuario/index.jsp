<jsp:include page="../portal/header.jsp"></jsp:include>
<jsp:include page="../portal/menuusuario.jsp"></jsp:include>
<div class="container theme-showcase" role="main">

<%@ page language="java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<title>Sitio Seguro :: Usuario</title> 
</head> 
<body> 
<h2>Modulo para usuarios</h2> 
<p><a href="../login/salir.jsp">Cerrar Sesion</a></p> 
<% 
String usuario = request.getUserPrincipal().getName(); 
out.println("Bienvenido: " + usuario); 
if(request.isUserInRole("CLIENTE")){ 
out.println("<p><a href='../pedido'>Hacer un Pedido</a></p>"); 
} 
if(request.isUserInRole("ADMINISTRADOR")){ 
	out.println("<p><a href='../admin/producto.jsp'>Administrar Productos</a></p>");
	out.println("<p><a href='../admin/categoria.jsp'>Administrar Categorias</a></p>");
} 
%> 
</body> 
</html>  

</div> <!-- /container -->
<jsp:include page="../portal/footer.jsp"></jsp:include>