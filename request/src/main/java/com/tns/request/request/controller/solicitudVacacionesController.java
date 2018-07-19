package com.tns.request.request.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.SolicitudVacacionesRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/request")
@RestController
public class solicitudVacacionesController {

	@Autowired
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

	@CrossOrigin(origins = "http://localhost:3000/")
	@GetMapping("/request}")
	public List<SolicitudVacaciones> getAllRequest() {
		System.out.println("Get all to Request");

		return (List<SolicitudVacaciones>) solicitudVacacionesRepository.findAll();

	}

	
	@PostMapping("/request/create")
	public SolicitudVacaciones createRequest(SolicitudVacaciones request) {
		System.out.println("Create Request:" + request.getIdRequest() + "..");
		return solicitudVacacionesRepository.save(request);

	}
	
	
}
