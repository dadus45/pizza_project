package com.app.service;

import java.util.List;

import com.app.DTO.AddressDTO;
import com.app.entity.Address;

public interface AddressService {
	
	List<AddressDTO> getUserAddress(String userId);
	
	Address addUserAddress(AddressDTO addressDto);
	
	Address deleteAddress(Long addressId);
}
