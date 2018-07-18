package com.tns.request.request.util;

import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public final class UtilDate {
	
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

}
