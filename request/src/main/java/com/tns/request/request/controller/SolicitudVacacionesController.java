package com.tns.request.request.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tns.request.request.business.SolicitudVacacionesService;
import com.tns.request.request.model.SolicitudVacaciones;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/solicitud")
@RestController
public class SolicitudVacacionesController {

	@Autowired
	private SolicitudVacacionesService SolicitudVacacionesService;
	//
	// @PostMapping("vacaciones/add")
	// public SolicitudVacaciones add(@RequestBody SolicitudVacaciones
	// solicitudVacaciones) {
	// return SolicitudVacacionesService.add(solicitudVacaciones);
	//
	// }

	@GetMapping("vacaciones/consultar/{cedula}")
	public SolicitudVacaciones geSolicitudVacacion(@PathVariable Long cedula) {
		System.out.println("Imprimiendo los datos" + cedula);
		return SolicitudVacacionesService.getSolicitudesByPersonId(cedula);
	}

	// @GetMapping("/consultar/todo")
	// public List<SolicitudVacaciones> get() {
	// return SolicitudVacacionesService.getAll();
	//
	// }
	//
	// @GetMapping("/consultar/todo")
	// public List<SolicitudVacaciones> getAllById(long id) {
	// return SolicitudVacacionesService.getAllById(id);
	//
	// }
	//
	// @DeleteMapping("/eliminar/{id}")
	// public void delete(@PathVariable long cedula) {
	// SolicitudVacacionesService.delete(cedula);
	// }

}
