package com.tns.request.request.util;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.text.ParseException;
import java.util.Date;

import org.junit.Assert;
import org.junit.Test;

public class UtilDateTest {

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechas() throws ParseException {
		Date fecha1 = UtilDate.getDateFromString("01/05/2018");
		Date fecha2 = UtilDate.getDateFromString("04/05/2018");
		long resultado = UtilDate.diferenciaDias(fecha1, fecha2);
		assertTrue(resultado == 3);
	}

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechasResultado6() throws ParseException {
		long resultado = UtilDate.diferenciaDias(UtilDate.getDateFromString("01/05/2018"),
				UtilDate.getDateFromString("07/05/2018"));
		assertTrue(resultado == 6);
	}

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechasDiferenteAnnio() throws ParseException {
		Date fecha1 = UtilDate.getDateFromString("31/12/2017");
		Date fecha2 = UtilDate.getDateFromString("01/01/2018");
		long resultado = UtilDate.diferenciaDias(fecha1, fecha2);
		assertTrue(resultado == 1);
	}

	@Test
	public void debeFallarAlCalcularDiferenciaEnDias() throws ParseException {
		Date fecha1 = UtilDate.getDateFromString("31/12/2017");
		Date fecha2 = UtilDate.getDateFromString("01/01/2018");
		long resultado = UtilDate.diferenciaDias(fecha1, fecha2);
		assertFalse(resultado == 2);
	}

	@Test
	public void debeCalcularDiasDisponiblesSegunFormula() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2019");
		Date fechaF = UtilDate.getDateFromString("01/08/2019");
		int diasDisfrutados = 0;

		int resultado = UtilDate.calcularDiasDisponibles(fechaI, fechaF, diasDisfrutados);
		Assert.assertEquals("se espera 9 dias disponibles", 9, resultado);
	}

	@Test
	public void debeFallarAlCalcularDiasDisponiblesSegunFormula() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2020");
		Date fechaF = UtilDate.getDateFromString("01/01/2019");
		int diasDisfrutados = 0;
		int resultado = UtilDate.calcularDiasDisponibles(fechaI, fechaF, diasDisfrutados);

		assertFalse(resultado != -15);
	}

	@Test
	public void debeCalcularDiasDisfrutadosEntreFechasDadas() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2018");
		Date fechaF = UtilDate.getDateFromString("25/01/2018");

		int resultado = UtilDate.calcularDiasDisfrutados(fechaI, fechaF);

		assertTrue(resultado == 19);
	}

	@Test
	public void debeFallarAlCalcularDiasDisfrutadoEntreFechasDadas() throws ParseException {

		Date fechaI = UtilDate.getDateFromString("01/07/2018");
		Date fechaF = UtilDate.getDateFromString("02/11/2018");

		int resultado = UtilDate.calcularDiasDisfrutados(fechaI, fechaF);

		assertFalse(resultado == 0);

	}

	@Test
	public void debeCalcularDiasDisfrutadosEntreFechasDadasDiferenteMes() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2018");
		Date fechaF = UtilDate.getDateFromString("25/02/2018");

		int resultado = UtilDate.calcularDiasDisfrutados(fechaI, fechaF);

		assertTrue(resultado == 40);
	}

	@Test
	public void debeVerificarLaFechaComparadaConlaActual() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2019");

		boolean res = UtilDate.checkCurrentDate(fechaI);

		Assert.assertEquals("se espera true", true, res);
	}

	@Test
	public void debeRetornarFalseAlVerificarLaFechaComparadaConlaActual() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2016");

		boolean res = UtilDate.checkCurrentDate(fechaI);

		Assert.assertEquals("se espera false", false, res);
	}

	@Test
	public void debeRetornarTruePorFechasCorrectas() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2020");
		Date fechaF = UtilDate.getDateFromString("02/01/2020");

		boolean res = UtilDate.checkVacationDates(fechaI, fechaF);

		Assert.assertEquals("se espera true", true, res);
	}

	@Test
	public void debeRetornarFalsePorFechasIncorrectas() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("03/01/2020");
		Date fechaF = UtilDate.getDateFromString("02/01/2020");

		boolean res = UtilDate.checkVacationDates(fechaI, fechaF);

		Assert.assertEquals("se espera false", false, res);
	}

	@Test
	public void debeRetornarLaFechaDeRegresoALabores() throws ParseException {

		Date fechaFin = UtilDate.getDateFromString("20/07/2020");

		String fechaRetornoLabor = UtilDate.calcularFecharRetornoLabor(fechaFin);

		Assert.assertEquals("se espera la fecha 21/07/2020", "21/07/2020", fechaRetornoLabor);

	}

	@Test
	public void debeRetornarLaFechaDeRegresoALaboresSiEsaFechaEsViernes() throws ParseException {

		Date fechaFin = UtilDate.getDateFromString("24/07/2020");

		String fechaRetornoLabor = UtilDate.calcularFecharRetornoLabor(fechaFin);

		Assert.assertEquals("se espera la fecha 27/07/2020", "27/07/2020", fechaRetornoLabor);

	}
	
	@Test
	public void debeRetornarLaFechaDeRegresoALaboresSiEsaFechaEsSabado() throws ParseException {

		Date fechaFin = UtilDate.getDateFromString("22/08/2020");

		String fechaRetornoLabor = UtilDate.calcularFecharRetornoLabor(fechaFin);

		Assert.assertEquals("se espera la fecha 24/08/2020", "24/08/2020", fechaRetornoLabor);

	}

	@Test
	public void debeRetornarTruePorDiasDisponibles() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2020");
		Date fechaF = UtilDate.getDateFromString("02/01/2020");

		boolean res = UtilDate.checkAvailableDays(fechaI, fechaF, 1);

		Assert.assertEquals("se espera true", true, res);
	}

	@Test
	public void debeRetornarFalsePorDiasDisponibles() throws ParseException {
		Date fechaI = UtilDate.getDateFromString("01/01/2020");
		Date fechaF = UtilDate.getDateFromString("016/01/2020");

		boolean res = UtilDate.checkAvailableDays(fechaI, fechaF, 1);

		Assert.assertEquals("se espera false", false, res);
	}
}
