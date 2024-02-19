package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.AddressDTO;
import com.app.DTO.EnumDto;
import com.app.DTO.OrderDto;
import com.app.DTO.OrderPendingDto;
import com.app.entity.Address;
import com.app.entity.Order;
import com.app.entity.OrderStatus;
import com.app.service.AddressService;
import com.app.service.OrderService;
@Validated
@RestController
@CrossOrigin(origins = "*")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@PreAuthorize("hasRole('user')")
	@GetMapping("/orders/{userId}")
	public List<Order> getOrders(@PathVariable @Valid String userId ){
		//http://127.0.0.1:7070/orders/onkar123
		return orderService.getAllOrders(userId);
	}
	@PreAuthorize("hasRole('admin')")
	@GetMapping("/orders/pending")
	public List<OrderPendingDto> getPendingOrders(){
		//http://127.0.0.1:7070/orders/Suraj123
		return orderService.getPendingOrders();
	}
	@PreAuthorize("hasRole('admin')")
	@PutMapping("/orders/pending/{orderId}")
	public List<OrderPendingDto> updateOrderStatus(@PathVariable  Long orderId,@RequestBody @Valid EnumDto status){
		//http://127.0.0.1:7070/orders/Suraj123
		return orderService.updateOrderStatus(orderId,status);
	}
	
	
	@PreAuthorize("hasRole('user')")
	@PostMapping("/placeOrder")
	public Order addOrder(@RequestBody @Valid OrderDto orderDto) {
		
		//http://127.0.0.1:7070/addNewAddress
		
		return orderService.addOrder(orderDto);
	}
	
	@PreAuthorize("hasRole('user')")
	@DeleteMapping("cancelOrder/{orderId}")
	public Order deleteOrder(@PathVariable @Min(1) Long orderId) {
		
		//http://127.0.0.1:7070/cancelOrder/1
		
		return orderService.deleteOrder(orderId);
	}
}
