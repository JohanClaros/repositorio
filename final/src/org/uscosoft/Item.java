package org.uscosoft;

public class Item {
	
	private int codigo;
	private int cantidad;
	
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Item(int codigo, int cantidad) {
		super();
		this.codigo = codigo;
		this.cantidad = cantidad;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "Item [codigo=" + codigo + ", cantidad=" + cantidad + "]";
	}
	
}
