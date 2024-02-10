package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.CartItem;
import com.app.entity.User;

public interface CartItemRepo extends JpaRepository<CartItem, Long>{
	
	List<CartItem> findByUser(User user);
	
	CartItem findByName(String name);
}
