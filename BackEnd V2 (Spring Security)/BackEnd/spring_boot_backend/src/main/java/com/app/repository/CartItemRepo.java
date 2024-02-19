package com.app.repository;

import java.util.List;

import org.hibernate.transform.ResultTransformer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.DTO.CartItemChartDto;
import com.app.entity.CartItem;
import com.app.entity.User;

public interface CartItemRepo extends JpaRepository<CartItem, Long>{
	@Query(value = "select * from cart_item where user_id=:user_id and order_Id is null",nativeQuery = true)
	List<CartItem> findByUser(User user_id);
	
	 @Query(value = "SELECT name, SUM(quantity) AS total FROM cart_item GROUP BY name", nativeQuery = true)
	List<CartItemChartDto> findChartData(ResultTransformer transformer);
	 
	CartItem findByName(String name);
}
