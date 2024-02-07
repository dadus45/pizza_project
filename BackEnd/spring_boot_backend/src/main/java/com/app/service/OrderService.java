package com.app.service;

import java.util.List;

import com.app.DTO.AddressDTO;
import com.app.DTO.OrderDto;
import com.app.entity.Address;
import com.app.entity.Order;

public interface OrderService {
	
	List<Order> getAllOrders(String userName);
	
	Order addOrder(OrderDto orderDto);
	
	Order deleteOrder(Long orderId);
}
