package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.AddressDTO;
import com.app.DTO.OrderDto;
import com.app.entity.Address;
import com.app.entity.CartItem;
import com.app.entity.Order;
import com.app.entity.OrderStatus;
import com.app.entity.User;
import com.app.repository.AddressRepo;
import com.app.repository.CartItemRepo;
import com.app.repository.OrderRepo;
import com.app.repository.UserRepo;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	
	@Autowired
	private OrderRepo orderRepo;
	
	@Autowired
	private AddressRepo addressRepo;
	
	@Autowired
	private CartItemRepo cartItemRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public List<Order> getAllOrders(String userName) {
		
		return orderRepo.findByUserName(userName);
	}

	@Override
	public Order addOrder(OrderDto orderDto) {
		
		Order order = mapper.map(orderDto, Order.class);
		Address address = addressRepo.findById(orderDto.getAddressId()).orElseThrow();
		order.setAddress(address);
		List<CartItem> list = cartItemRepo.findByUser(userRepo.findById(orderDto.getUserName()).get());
		order.setCartItem(list);
		order.setOrderStatus(OrderStatus.PENDING);
		order.setOrderDate(LocalDate.now());
		
		return orderRepo.save(order);
		
	}

	@Override
	public Order deleteOrder(Long orderId) {
		// TODO Auto-generated method stub
		Order order = orderRepo.findById(orderId).get();
		orderRepo.delete(order);
		return order;
	}

	

}
