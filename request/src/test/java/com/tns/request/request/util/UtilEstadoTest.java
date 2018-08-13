package com.tns.request.request.util;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class UtilEstadoTest {

	@Test
	public void debeDevolverUnoCuandoElEstadoDeSolicitudSeaAceptado() {
		String estado = "aprobado";

		int resultado = UtilEstado.convertirEstdoSolicitudAInt(estado);

		assertTrue(resultado == 1);
	}

	@Test
	public void debeDevolverDosCuandoElEstadoDeSolicitudseaRechazado() {
		String estado = "rechazado";

		int resultado = UtilEstado.convertirEstdoSolicitudAInt(estado);
		assertTrue(resultado == 2);
	}

	@Test
	public void debeDevolverCeroCuandoElEstadoDeSoliitudSeaPendiente() {
		String estado = "pendiente";

		int resultado = UtilEstado.convertirEstdoSolicitudAInt(estado);

		assertTrue(resultado == 0);
	}

	@Test
	public void debeDevolverAprobadoCuandoElEstadoSolicitudSeaUno() {
		int estado = 1;

		String resultado = UtilEstado.convertirEstadoSolicitudAString(estado);

		assertTrue(resultado == "aprobado");
	}

	@Test
	public void debeDevolverCanceladoCuandoElEstdoSolicitudSeaDos() {
		int estado = 2;

		String resultado = UtilEstado.convertirEstadoSolicitudAString(estado);

		assertTrue(resultado == "rechazado");
	}

	@Test
	public void debeDevolverPendienteCuandoElEstdoSolicitudSeaCero() {
		int estado = 0;

		String resultado = UtilEstado.convertirEstadoSolicitudAString(estado);

		assertTrue(resultado == "pendiente");
	}
}
