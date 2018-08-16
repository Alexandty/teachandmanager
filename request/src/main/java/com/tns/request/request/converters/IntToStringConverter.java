package com.tns.request.request.converters;

import javax.persistence.AttributeConverter;

public  class IntToStringConverter implements AttributeConverter<String, Integer> {

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
		return estado;
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
		return estado;
	}

}
