package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.AddressDTO;
import com.app.DTO.OrderDto;
import com.app.entity.Address;
import com.app.entity.Order;
import com.app.service.AddressService;
import com.app.service.OrderService;

@RestController
@CrossOrigin(origins = "*")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	
	@GetMapping("/orders/{userId}")
	public List<Order> getOrders(@PathVariable @Valid String userId ){
		//http://127.0.0.1:7070/orders/onkar123
		return orderService.getAllOrders(userId);
	}
	
	
	@PostMapping("/placeOrder")
	public Order addOrder(@RequestBody @Valid OrderDto orderDto) {
		
		//http://127.0.0.1:7070/addNewAddress
		
		return orderService.addOrder(orderDto);
	}
	
	
	@DeleteMapping("cancelOrder/{orderId}")
	public Order deleteOrder(@PathVariable @Min(1) Long orderId) {
		
		//http://127.0.0.1:7070/cancelOrder/1
		
		return orderService.deleteOrder(orderId);
	}
}
