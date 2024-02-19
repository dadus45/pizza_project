package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Pizza;

@Repository
public interface PizzaRepo extends JpaRepository<Pizza, Long> {

	Pizza findByName(String name);
	
	
}


