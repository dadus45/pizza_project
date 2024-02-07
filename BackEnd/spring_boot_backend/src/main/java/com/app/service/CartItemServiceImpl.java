package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.CartItemDTO;
import com.app.entity.CartItem;
import com.app.entity.User;
import com.app.repository.CartItemRepo;
import com.app.repository.UserRepo;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {

	@Autowired
	private CartItemRepo cartItemRepo;
	
	@Autowired
	private UserRepo userRepo; 
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public CartItem addCartItem(CartItemDTO cartItemDto) {
		
		CartItem cartItem = mapper.map(cartItemDto, CartItem.class);
		
		User user = userRepo.findById(cartItemDto.getUserName()).orElseThrow();
		
		cartItem.setUser(user);
		
		 return cartItemRepo.save(cartItem);

	}

	@Override
	public List<CartItem> getAllCartItems(String userId) {
		
		User user = userRepo.findById(userId).orElseThrow();
		
		List<CartItem> cartItems = cartItemRepo.findByUser(user);
		
		
//		List<CartItemDTO> cartItemsDto = new ArrayList<CartItemDTO>();
//		cartItems.forEach((item)->{
//			cartItemsDto.add(mapper.map(item, CartItemDTO.class));
//		});
//		cartItemsDto.forEach((item)->item.setUserName(userId));
		
		return cartItems;
	}

	@Override
	public String deleteCartItem(Long CartItemId) {
		
		CartItem cartItem = cartItemRepo.findById(CartItemId).orElseThrow();
		
		
		if(cartItem!=null) {
			cartItemRepo.delete(cartItem);
			return "Item deleted :"+cartItem.getName();
		}else {
			return "Item not found :";
		}
			
	}

}
