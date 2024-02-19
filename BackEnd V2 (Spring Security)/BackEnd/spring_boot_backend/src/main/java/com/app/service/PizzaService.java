package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.DTO.PizzaDTO;
import com.app.DTO.PizzaUpdateDto;
import com.app.entity.Pizza;

public interface PizzaService {
	
	List<Pizza> getAllPizza();
	
	Pizza addPizza(PizzaDTO pdto);
	
	Pizza deletePizza(Long pizzaId);

	Pizza updatePizza( @Valid PizzaUpdateDto updatePizza);
	
	//void initRolesAndUser();

}
