
    <%@ page import="org.uscosoft.Tienda"%>  
    <%@ page import="org.comercio.producto.Producto"%> 
    <%@ page import="java.util.ArrayList"%> 
     
     <div class="row">
    
     
     <jsp:include page="../portal/header.jsp"></jsp:include>
     

      
<%
	String categoria = request.getParameter("categoria");
int inicio = Integer.parseInt(categoria);
	//int inicio = Integer.parseInt(categoria) * 100;
	//int limite = inicio + 20;
	Tienda tienda = new Tienda();
	ArrayList <Producto> lista = tienda.getProductos(inicio);
	for(Producto producto : lista){
	//(for(int i=inicio; i<limite; i=i+1){
		 String imagen = "../imagenes/"+producto.getImagen();
		
%>       
        <div class="col-sm-4">       
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title"> <%= producto.getNombre() %></h3>
              </div>
            <div class="panel-body">
              <p> $ <%= producto.getPrecio() %>
              <img src="<%= imagen %>" width="150" height="150"/>
              </p>
              <br>
              <a href= "compra.jsp?codigo=<%= producto.getCodigo() %>">	
              <button type="button" class="btn btn-xs btn-success">Comprar</button>
              </a>
            </div>
          </div>
        </div><!-- /.col-sm-4 -->
        
<jsp:include page="../portal/footer.jsp"></jsp:include>         
<%
	}
%>      
      </div>
       
      
       
      

