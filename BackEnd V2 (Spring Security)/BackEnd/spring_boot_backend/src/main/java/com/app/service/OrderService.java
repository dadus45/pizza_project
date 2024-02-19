package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.DTO.AddressDTO;
import com.app.DTO.OrderDto;
import com.app.DTO.OrderPendingDto;
import com.app.entity.Address;
import com.app.entity.Order;
import com.app.entity.OrderStatus;

public interface OrderService {
	
	List<Order> getAllOrders(String userName);
	
	Order addOrder(OrderDto orderDto);
	
	Order deleteOrder(Long orderId);

	List<OrderPendingDto> getPendingOrders();

	List<OrderPendingDto> updateOrderStatus(Long orderId, @Valid OrderStatus status);
}
