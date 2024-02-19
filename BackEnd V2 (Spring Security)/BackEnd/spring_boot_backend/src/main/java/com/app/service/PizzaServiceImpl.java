package com.app.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.PizzaDTO;
import com.app.DTO.PizzaUpdateDto;
import com.app.entity.Pizza;
import com.app.entity.Price;
import com.app.entity.Role;
import com.app.entity.User;
import com.app.repository.PizzaRepo;

@Service
@Transactional
public class PizzaServiceImpl implements PizzaService {

	@Autowired
	private PizzaRepo pizzaRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Pizza> getAllPizza() {
		
		System.out.println("IN service impl");
		
		List<Pizza> findAll = pizzaRepo.findAll();
		
		return findAll;
	}

	@Override
	public Pizza addPizza(PizzaDTO pdto) {
		
		Pizza pizza = mapper.map(pdto, Pizza.class);
		
		return pizzaRepo.save(pizza);
	}

	@Override
	public Pizza deletePizza(Long pizzaId) {
		
		Pizza pizza = pizzaRepo.findById(pizzaId).orElseThrow();
		pizzaRepo.delete(pizza);
		return pizza;
	}

	@Override
	public Pizza updatePizza(@Valid PizzaUpdateDto updatePizza) {
		Pizza pizza = pizzaRepo.findByName(updatePizza.getName());
		pizza.setLarge(updatePizza.getLarge());
		pizza.setMedium(updatePizza.getMedium());
		pizza.setSmall(updatePizza.getSmall());
		pizza.setDescription(updatePizza.getDescription());
		return pizzaRepo.save(pizza);
	}

	//@Override
//	public void initRolesAndUser() {
//		
//		try
//		{
//			pizzaRepo.findByName("veg pizza unique");
//			System.out.println("default pizza exists");
//			
//		}catch(Exception e) {
//			System.out.println("Creating default pizza entry");
////			Pizza pizza = new Pizza();
////			Price price = new Price();
//			
//			pric.setSmall(99.00);
//			price.setMedium(199.00);
//			price.setLarge(299.00);
//			
//			List<Price> list = new ArrayList<Price>();
//			list.add(price);
//			
//			
//			
//			pizza.setCategory("veg");
//			pizza.setDescription("yummy pizza loaded with vegetables and cheese");
//			pizza.setImage("images/some_pizza");
//			pizza.setName("veg pizza unique");
//			//pizza.setPrices(list);
//			
//			pizzaRepo.save(pizza);
//		}
		
		
		
	}


