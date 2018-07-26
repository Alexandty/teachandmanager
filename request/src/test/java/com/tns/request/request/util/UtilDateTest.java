package com.tns.request.request.util;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

public class UtilDateTest {

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechas() throws ParseException {
		Date fecha1 = getDateFromString("01/05/2018");
		Date fecha2 = getDateFromString("04/05/2018");
		long resultado = UtilDate.diferenciaDias(fecha1, fecha2);
		assertTrue(resultado == 3);
	}

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechasResultado6() throws ParseException {
		long resultado = UtilDate.diferenciaDias(getDateFromString("01/05/2018"), getDateFromString("07/05/2018"));
		assertTrue(resultado == 6);
	}

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechasDiferenteAnnio() throws ParseException {
		Date fecha1 = getDateFromString("31/12/2017");
		Date fecha2 = getDateFromString("01/01/2018");
		long resultado = UtilDate.diferenciaDias(fecha1, fecha2);
		assertTrue(resultado == 1);
	}

	@Test
	public void debeFallarAlCalcularDiferenciaEnDias() throws ParseException {
		Date fecha1 = getDateFromString("31/12/2017");
		Date fecha2 = getDateFromString("01/01/2018");
		long resultado = UtilDate.diferenciaDias(fecha1, fecha2);
		assertFalse(resultado == 2);
	}

	private Date getDateFromString(String fecha) throws ParseException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
		return simpleDateFormat.parse(fecha);
	}

	@Test
	public void debeCalcularDiasDisponiblesSegunFormula() throws ParseException {
		Date fechaI = getDateFromString("01/01/2017");
		Date fechaF = getDateFromString("01/08/2017");
		int diasDisfrutados=0;

		int resultado = UtilDate.calcularDiasDisponibles(fechaI, fechaF,diasDisfrutados);
		Assert.assertEquals("se espera 9 dias disponibles",9, resultado);
	}

	@Test
	public void debeFallarAlCalcularDiasDisponiblesSegunFormula() throws ParseException {
		Date fechaI = getDateFromString("01/01/2017");
		Date fechaF = getDateFromString("01/01/2016");
		int diasDisfrutados=0;
		int resultado = UtilDate.calcularDiasDisponibles(fechaI, fechaF,diasDisfrutados);

		assertFalse(resultado != -15);
	}

	@Test
	public void debeCalcularDiasDisfrutadosEntreFechasDadas() throws ParseException {
		Date fechaI = getDateFromString("01/01/2018");
		Date fechaF = getDateFromString("25/01/2018");

		int resultado = UtilDate.calcularDiasDisfrutados(fechaI, fechaF);

		assertTrue(resultado == 19);
	}

	@Test
	public void debeFallarAlCalcularDiasDisfrutadoEntreFechasDadas() throws ParseException {

		Date fechaI = getDateFromString("01/07/2018");
		Date fechaF = getDateFromString("02/11/2018");

		int resultado = UtilDate.calcularDiasDisfrutados(fechaI, fechaF);

		assertFalse(resultado == 0);

	}

	@Test
	public void debeCalcularDiasDisfrutadosEntreFechasDadasDiferenteMes() throws ParseException {
		Date fechaI = getDateFromString("01/01/2018");
		Date fechaF = getDateFromString("25/02/2018");

		int resultado = UtilDate.calcularDiasDisfrutados(fechaI, fechaF);

		assertTrue(resultado == 40);
	}

}
