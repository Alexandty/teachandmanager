package com.tns.request.request.converters;

import org.junit.Assert;
import org.junit.Test;

public class IntToStringConverterTest {

	IntToStringConverter metodosDeConversIntToString = new IntToStringConverter();
	
	@Test
	public void debeRetornarUnoCuandoElEstadoSeaAprobado() {
		

		String estado = "aprobado";
		int resultado = metodosDeConversIntToString.convertToDatabaseColumn(estado);

		Assert.assertEquals("esto es lo que se espera", 1, resultado);

	}
	
	@Test
	public void debeRetornarDosCuandoElEstadoSeaRechazado() {

		String estado = "rechazado";
		int resultado = metodosDeConversIntToString.convertToDatabaseColumn(estado);

		Assert.assertEquals("esto es lo que se espera", 2, resultado);

	}
	
	@Test 
	public void debeRetornarAprobadoCuandoElEstadoSeaUno() {
		
		int estado = 1;
		String resultado = metodosDeConversIntToString.convertToEntityAttribute(estado);

		Assert.assertEquals("esto es lo que se espera", "aprobado", resultado);
	}
	
	@Test 
	public void debeRetornarRechazadoCuandoElEstadoSeaDos() {
		
		int estado = 2;
		String resultado = metodosDeConversIntToString.convertToEntityAttribute(estado);

		Assert.assertEquals("esto es lo que se espera", "rechazado", resultado);
	}

}
