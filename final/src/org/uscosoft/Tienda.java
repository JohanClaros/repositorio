package org.uscosoft;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.comercio.producto.Producto;
import org.comercio.producto.ProductoLista;
import org.comercio.categoria.Categoria;
import org.comercio.categoria.CategoriaLista;
import org.comercio.utilidad.BaseDato;

@SuppressWarnings("unused")
public class Tienda {
	
	public ArrayList getProductos(int categoria) {
		ArrayList lista = new ArrayList();

		BaseDato basedato = new BaseDato();
		Connection conexion1 = null;
		Statement sentencia1 = null;
		ResultSet rs1 = null;
		String sql = "";

		try {
			conexion1 = basedato.getConexion();
			sentencia1 = conexion1.createStatement();

			sql = "select * from producto WHERE pro_categoria=" + categoria;

			rs1 = sentencia1.executeQuery(sql);

			while (rs1.next()) {
				int codigo = rs1.getInt("pro_codigo");
				String nombre = rs1.getString("pro_nombre");
				double precio = rs1.getDouble("pro_precio");
				String descripcion = rs1.getString("pro_descripcion");
				String imagen = rs1.getString("pro_imagen");
				categoria = rs1.getInt("pro_categoria");

				Producto producto = new Producto();

				producto.setCodigo(codigo);
				producto.setNombre(nombre);
				producto.setPrecio(precio);
				producto.setDescripcion(descripcion);
				producto.setImagen(imagen);
				producto.setCategoria(categoria);

				lista.add(producto);
			}

		} catch (Exception e) {
			System.out.println("Error: " + e.toString());
		}

		return lista;

	}
	
	public Producto getProducto(int codigo) {
		Producto producto = new Producto();

		BaseDato basedato = new BaseDato();
		Connection conexion1 = null;
		Statement sentencia1 = null;
		ResultSet rs1 = null;
		String sql = "";

		try {
			conexion1 = basedato.getConexion();
			sentencia1 = conexion1.createStatement();

			sql = "select * from producto where pro_codigo="+codigo;

			rs1 = sentencia1.executeQuery(sql);

			if (rs1.next()) {
				codigo = rs1.getInt("pro_codigo");
				String nombre = rs1.getString("pro_nombre");
				double precio = rs1.getDouble("pro_precio");
				String descripcion = rs1.getString("pro_descripcion");
				String imagen = rs1.getString("pro_imagen");
				int categoria = rs1.getInt("pro_categoria");

				

				producto.setCodigo(codigo);
				producto.setNombre(nombre);
				producto.setPrecio(precio);
				producto.setDescripcion(descripcion);
				producto.setImagen(imagen);
				producto.setCategoria(categoria);

				
			}

		} catch (Exception e) {
			System.out.println("Error: " + e.toString());
		}

		return producto;

	}
	
	public ArrayList<Categoria> getCategoria() {
		ArrayList<Categoria> lista = new ArrayList<Categoria>();

		BaseDato basedato = new BaseDato();
		Connection conexion1 = null;
		Statement sentencia1 = null;
		ResultSet rs1 = null;
		String sql = "";

		try {
			conexion1 = basedato.getConexion();
			sentencia1 = conexion1.createStatement();

			sql = "select * from categoria WHERE cat_estado=1";

			rs1 = sentencia1.executeQuery(sql);

			while (rs1.next()) {
				int codigo = rs1.getInt("cat_codigo");
				String nombre = rs1.getString("cat_nombre");
				int estado = rs1.getInt("cat_estado");
				

				Categoria categoria = new Categoria();

				categoria.setCodigo(codigo);
				categoria.setNombre(nombre);
				categoria.setEstado(estado);

				lista.add(categoria);
			}

		} catch (Exception e) {
			System.out.println("Error: " + e.toString());
		}

		return new  ArrayList<Categoria>(lista);

	}

}
