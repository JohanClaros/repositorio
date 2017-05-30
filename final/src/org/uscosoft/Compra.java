package org.uscosoft;

import java.io.IOException;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Compra
 */
@WebServlet("/Compra")
public class Compra extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Compra() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String codigo = request.getParameter("codigo");
		String cantidad = request.getParameter("cantidad");
		
		int pCodigo = Integer.parseInt(codigo);
		int pCantidad = Integer.parseInt(cantidad);
		
		Item item = new Item(pCodigo, pCantidad);
		
		HttpSession session = request.getSession();
		Vector compras = (Vector)session.getAttribute("compras");
		
		if(compras == null){
			compras = new Vector();
		}
		
		compras.add(item);
		session.setAttribute("compras", compras);
		response.sendRedirect("producto/");
		
	}

}
