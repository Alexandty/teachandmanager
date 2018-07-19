package com.tns.request.request.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.model.SolicitudVacaciones;
import com.tns.request.request.repository.SolicitudVacacionesRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/request")
@RestController
public class SolicitudVacacionesController {

	@Autowired
	private SolicitudVacacionesRepository solicitudVacacionesRepository;

	@CrossOrigin(origins = "http://localhost:3000/")
	@GetMapping("/request")
	public List<SolicitudVacaciones> getAllRequest() {
		System.out.println("Get all to Request");

		return (List<SolicitudVacaciones>) solicitudVacacionesRepository.findAll();

	}
	
	@GetMapping("/request/{id}")
	public ResponseEntity<SolicitudVacaciones> getSolicitudByCedula(@PathVariable("id") Long id) {
		System.out.println("Get Solicitud by id...");

		Optional<SolicitudVacaciones> SolicitudVacacionesData = solicitudVacacionesRepository.findById(id);
		if (SolicitudVacacionesData .isPresent()) {
			return new ResponseEntity<>(SolicitudVacacionesData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PostMapping("/request/create")
	public SolicitudVacaciones createRequest(SolicitudVacaciones request) {
		System.out.println("Create Request:" + request.getIdRequest() + "..");
		return solicitudVacacionesRepository.save(request);

	}
	
	
}
