package com.tns.request.request.util;

public class UtilEstado {

	public static int convertirEstdoSolicitudAInt(String estado) {
		if (estado.equals("aprobado")) {
			return 1;
		}
		if (estado.equals("rechazado")) {
			return 2;
		}
		return 0;
	}

	public static String convertirEstadoSolicitudAString(int string) {
		if (string == 1) {
			return "aprobado";
		}
		if (string == 2) {
			return "rechazado";
		}
		return "pendiente";
	}
}
