package com.tns.request.request.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import com.tns.request.request.exception.BusinessException;

public final class UtilDate {

	private static final double CONS_CALCULO_VACIONES = 0.0416666666666667;
	private static final String DATE_FORMAT = "dd/MM/yyyy";

	private UtilDate() {
		super();
	}

	public static Date getDateFromString(String fecha) throws ParseException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DATE_FORMAT);
		return simpleDateFormat.parse(fecha);
	}

	public static String getStringFromDate(Date fecha) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DATE_FORMAT);
		return simpleDateFormat.format(fecha);
	}

	public static long diferenciaDias(Date fecha1, Date fecha2) {
		return TimeUnit.MILLISECONDS.toDays(dateToMilli(fecha2) - dateToMilli(fecha1));

	}

	private static long dateToMilli(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.getTimeInMillis();
	}

	public static int calcularDiasDisponibles(Date fechaIngreso, Date fechaInicio, int diasDisfrutados) {
		if (!checkCurrentDate(fechaInicio)) {
			throw new BusinessException("Fecha incorrecta");
		}
		double diasdisponibles = (diferenciaDias(fechaIngreso, fechaInicio) * CONS_CALCULO_VACIONES)
				- diasDisfrutados;
		return aproximacionDecimal(diasdisponibles);
	}

	public static boolean checkCurrentDate(Date fechaInicio) {
		Date currentDate = new Date();
		if (getStringFromDate(currentDate).equals(getStringFromDate(fechaInicio)) || fechaInicio.after(currentDate)) {
			return true;
		}
		return false;
	}

	public static boolean checkVacationDates(Date fechaInicio, Date fechaFin) {
		if (fechaFin.after(fechaInicio)) {
			return true;
		}
		return false;
	}

	public static boolean checkAvailableDays(Date fechaInicio, Date fechaFin, int availableDays) {
		if (diferenciaDias(fechaInicio, fechaFin) > availableDays) {
			return false;
		}
		return true;
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
		return diasHabiles - diasFinde + 1;
	}

	public static String calcularFecharRetornoLabor(Date fechaFin) {
		Calendar fecha = Calendar.getInstance();
		fecha.setTime(fechaFin);
		if (fecha.get(Calendar.DAY_OF_WEEK) == 7) {
			fecha.add(Calendar.DATE, 2);
		} else if (fecha.get(Calendar.DAY_OF_WEEK) == 6) {
			fecha.add(Calendar.DATE, 3);
		} else {
			fecha.add(Calendar.DATE, 1);
		}

		Date fechaR = fecha.getTime();
		return getStringFromDate(fechaR);
	}

}
