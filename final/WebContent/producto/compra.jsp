<jsp:include page="../portal/header.jsp"></jsp:include>
<jsp:include page="../portal/menuinvitado.jsp"></jsp:include>
<div class="container theme-showcase" role="main">

<%@ page import="org.comercio.producto.ProductoServicio" %>
<%@ page import="org.comercio.producto.Producto"%>
<%@ page import="org.uscosoft.Tienda"%>

<%



	String codigo = request.getParameter("codigo");

Tienda tienda = new Tienda();

Producto producto = tienda.getProducto(Integer.parseInt(codigo));

	
	String descripcion = producto.getDescripcion();
	String nombre = producto.getNombre();
	String imagen = "../imagenes/"+producto.getImagen();
    double precio = producto.getPrecio();
%>

<h2><%= nombre %></h2>
<p>
<img src="<%= imagen %>" width="150" height="150"/>
<%= descripcion %>
</p>
<p>Precio: <%= precio %></p>

<form action="../Compra" method="post">
<input type="hidden" name="codigo" value="<%= codigo %>">
<p>Cantidad: <input type="number" name="cantidad"></p>
<p><input type="submit" value="Comprar"></p>
</form>

</div> <!-- /container -->
<jsp:include page="../portal/footer.jsp"></jsp:include>