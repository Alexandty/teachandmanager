package com.tns.request.request.util;

import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public final class UtilDate {

	private static final double CONS_CALCULO_VACIONES = 0.0416666666666667;

	private UtilDate() {
		super();
	}

	public static long diferenciaDias(Date fecha1, Date fecha2) {
		return TimeUnit.MILLISECONDS.toDays(dateToMilli(fecha2) - dateToMilli(fecha1));
	}

	private static long dateToMilli(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.getTimeInMillis();
	}

	public static int calcularDiasDisponibles(Date fechaInicio, Date fechaIngreso) {
		double diasdisponibles = ((diferenciaDias(fechaInicio, fechaIngreso) * CONS_CALCULO_VACIONES));
		return aproximacionDecimal(diasdisponibles);
	}

	private static int aproximacionDecimal(double decimal) {
		int entero = (int) decimal;
		decimal = decimal - entero;
		if (decimal > 0.5) {
			entero++;
		}
		return entero;
	}

	public static int calcularDiasDisfrutados(Date fechaI, Date fechaF) {
		Calendar calendar = Calendar.getInstance();

		calendar.setTime(fechaI);
		int day = calendar.get(Calendar.DAY_OF_WEEK);
		calendar.setTime(fechaF);
		int diasHabiles = 0;
		int diasFinde = 0;
		for (int i = 0; i < diferenciaDias(fechaI, fechaF); i++) {
			if (day == 7) {
				diasFinde = diasFinde + 2;
				day = 0;
			}
			diasHabiles++;
			day++;
		}
		System.out.println(diferenciaDias(fechaI, fechaF) - diasFinde + " " + diasFinde);
		return diasHabiles - diasFinde + 1 ;
	}

}
