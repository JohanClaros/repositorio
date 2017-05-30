






function getProductos(categoria){
	$("#div_productos").load("productos.jsp?categoria=" + categoria);
	
	var size = document.getElementById("size").value;
	for(var i=1;i<=size; i++){
		
		$("#c" + i).removeClass("list-group-item active").addClass("list-group-item");
	}
	$("#c" + categoria).removeClass("list-group-item").addClass("list-group-item active");
}