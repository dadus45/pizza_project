package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.app.DTO.PizzaDTO;
import com.app.entity.Pizza;
import com.app.service.ImageHandlingService;
import com.app.service.PizzaService;
import static org.springframework.http.MediaType.*;


@RestController
@RequestMapping("/pizza")
@CrossOrigin(origins = "*")
public class PizzaController 
{
	
	@Autowired
	private PizzaService pizzaService;
	
	@Autowired
	private ImageHandlingService imgService;
	
	//http://host:port/pizza
	@GetMapping
	public List<Pizza> getAllPizza()
	{
		System.out.println("In controller");
		return pizzaService.getAllPizza();
	}
	
	@PostMapping
	public Pizza addPizza(@RequestBody @Valid Pizza addPizza)
	{
		System.out.println(addPizza);
		return pizzaService.addPizza(addPizza);
	}
	
	@DeleteMapping("/{pizzaId}")
	public Pizza deletePizza(@PathVariable Long pizzaId)
	{
		return pizzaService.deletePizza(pizzaId);
		
	}
	
	@PostMapping(value = "/images/{pizzaId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long pizzaId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + pizzaId);
		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadImage(pizzaId, imageFile));
	}
	
	@GetMapping(value="/images/{pizzaId}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> serveEmpImage(@PathVariable Long pizzaId) throws IOException {
		System.out.println("in download img " + pizzaId);
		return ResponseEntity.ok(imgService.downloadImage(pizzaId));
	}
	
//	@PostConstruct
//	public void initRolesAndUser()
//	{
//		pizzaService.initRolesAndUser();
//	}
}
