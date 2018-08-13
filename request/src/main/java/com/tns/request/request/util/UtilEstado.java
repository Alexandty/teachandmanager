package com.tns.request.request.util;

public class UtilEstado {
	private static String ESTADO_SOLCIITUD_STRING = "";

	public static int convertirEstdoSolicitudAInt(String estado) {
		if (estado == "aprobado") {
			return 1;
		}
		if (estado == "rechazado") {
			return 2;
		}
		return 0;
	}

	public static String convertirEstadoSolicitudAString(int string) {
		if (string == 1) {
			return ESTADO_SOLCIITUD_STRING = "aprobado";
		}
		if (string == 2) {
			return ESTADO_SOLCIITUD_STRING = "rechazado";
		}
		return ESTADO_SOLCIITUD_STRING = "pendiente";
	}
}
