package com.tns.request.request.util;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Ignore;
import org.junit.Test;

public class UtilDateTest {

	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechas() throws ParseException {
		Date fecha1 = getDateFromString("01/05/2018");
		Date fecha2 = getDateFromString("04/05/2018");
		long resultado = UtilDate.diferenciaDias(fecha1,fecha2);
		assertTrue(resultado == 3);
	}
	
	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechasResultado6() throws ParseException {
		long resultado = UtilDate.diferenciaDias(getDateFromString("01/05/2018"),getDateFromString("07/05/2018"));
		assertTrue(resultado == 6);
	}
	
	@Test
	public void debeCalcularDiferenciaEnDiasEntreDosFechasDiferenteAnnio() throws ParseException {
		Date fecha1 = getDateFromString("31/12/2017");
		Date fecha2 = getDateFromString("01/01/2018");
		long resultado = UtilDate.diferenciaDias(fecha1,fecha2);
		assertTrue(resultado == 1);
	}
	
	@Test
	public void debeFallarAlCalcularDiferenciaEnDias() throws ParseException {
		Date fecha1 = getDateFromString("31/12/2017");
		Date fecha2 = getDateFromString("01/01/2018");
		long resultado = UtilDate.diferenciaDias(fecha1,fecha2);
		assertFalse(resultado == 2);
	}
	
	
	@Test
	public void diaDeLaSemana() throws ParseException {
		Date date = getDateFromString("31/12/2017");
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		int i = c.get(Calendar.DAY_OF_WEEK);
		System.out.println("" + i);
	}
	
	private Date getDateFromString(String fecha) throws ParseException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
		return simpleDateFormat.parse(fecha);
	}

	
}
