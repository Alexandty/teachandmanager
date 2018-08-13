package com.tns.request.request.converters;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.AttributeConverter;

public class IntToStringConverter implements AttributeConverter<String, Integer> {

	private static final Map<String, Object> BASE_ESTADO;

	static {
		BASE_ESTADO = new HashMap<>();
		BASE_ESTADO.put("aprobado", 1);
		BASE_ESTADO.put("rechazado", 2);
		BASE_ESTADO.put("pendiente", 0);
		BASE_ESTADO.put("1", "aprobado");
		BASE_ESTADO.put("2", "rechazado");
		BASE_ESTADO.put("0", "pendiente");
	}

	@Override
	public Integer convertToDatabaseColumn(String values) {
		
		int estado = 0;
		switch (values) {
		case "aprobado":
			estado = 1;
			break;
		case "rechazado":
			estado = 2;
			break;
		default:
			break;
		}
		return estado ;
	}

	@Override
	public String convertToEntityAttribute(Integer values) {
		String estado = "pendiente";
		switch (values) {
		case 1:
			estado = "aprobado";
			break;
		case 2:
			estado = "rechazado";
			break;
		default:
			break;
		}
		return estado ;
	}

}
