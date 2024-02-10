package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Address;
import com.app.entity.Order;
import com.app.entity.User;

public interface OrderRepo extends JpaRepository<Order, Long> {

	List<Order> findByUserName(String userName);
}
