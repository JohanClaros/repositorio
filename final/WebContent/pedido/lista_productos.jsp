
<%@ page import="org.comercio.producto.ProductoServicio" %>
<%@ page import="org.comercio.categoria.Categoria"%>
<%@ page import="org.uscosoft.Tienda"%>
<%@ page import="java.util.ArrayList"%>

<script src="../js/script1.js"></script>

      <div class="page-header">
        <h1>LISTADO DE PRODUCTOS</h1>
      </div>
      <div class="row">
      
        <div class="col-sm-3">
          <div class="list-group">
          <%
          Tienda tienda = new Tienda();
          ArrayList<Categoria> lista = tienda.getCategoria();
          
          int value =0;
          int contador=1;
          int size=0;
          
          for(Categoria categoria : lista){
        	  if(contador==1){	  
          %>
          
            <a id="c<%=categoria.getCodigo()%>" href="javascript:getProductos(<%=categoria.getCodigo()%>)" class="list-group-item"><%=categoria.getNombre()%></a>
            <% 
            value = categoria.getCodigo();
        	  }else{
            %>
            <a id="c<%=categoria.getCodigo()%>" href="javascript:getProductos(<%=categoria.getCodigo()%>)" class="list-group-item active"><%=categoria.getNombre()%></a>
            <%
        	  }
            %>
            <%
            contador++;
          }
          size=contador;
            %>
           <input type="hidden" name="size" id="size" value="8" /> 
          </div>
        </div><!-- /.col-sm-3 -->
        
        <div id="div_productos" class="col-sm-9">
        	<jsp:include page="productos.jsp">
        	<jsp:param value="<%=value %>" name="categoria"/></jsp:include>
        </div><!-- /.col-sm-9 -->
        
      </div>

