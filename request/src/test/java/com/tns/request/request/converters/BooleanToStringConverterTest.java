package com.tns.request.request.converters;

import org.junit.Assert;
import org.junit.Test;

public class BooleanToStringConverterTest {

	BooleanToStringConverter metodoConversDeBooleanToString = new BooleanToStringConverter();

	@Test
	public void debeDevolverLetraSCuandoElDatoSeaBoleano() {
		boolean value = true;

		String resultado = metodoConversDeBooleanToString.convertToDatabaseColumn(value);

		Assert.assertEquals("esto es lo que se espera", "S", resultado);
	}

	@Test
	public void debeDevolverLetraNCuandoElDatoSeaBoleano() {
		boolean value = false;

		String resultado = metodoConversDeBooleanToString.convertToDatabaseColumn(value);

		Assert.assertEquals("esto es lo que se espera", "N", resultado);
	}

	@Test
	public void debeDevolverTrueCuandoLaLetraSeaS() {

		String value = "S";

		boolean resultado = metodoConversDeBooleanToString.convertToEntityAttribute(value);
		Assert.assertEquals("esto es lo que se espera", true, resultado);
	}
	
	@Test
	public void debeDevolverTrueCuandoLaLetraSeaN() {

		String value = "N";

		boolean resultado = metodoConversDeBooleanToString.convertToEntityAttribute(value);
		Assert.assertEquals("esto es lo que se espera", false, resultado);
	}

}
