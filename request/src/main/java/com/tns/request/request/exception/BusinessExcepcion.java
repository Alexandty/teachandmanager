package com.tns.request.request.exception;

public class BusinessExcepcion extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public BusinessExcepcion() {
		super();
	}

	public BusinessExcepcion(String message) {
		super(message);
	}

}
