package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.AddressDTO;
import com.app.entity.Address;
import com.app.service.AddressService;

@RestController
@CrossOrigin(origins = "*")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	@PreAuthorize("hasRole('user')")
	@GetMapping("/address/{userId}")
	public List<AddressDTO> getUserAddress(@PathVariable @Valid String userId ){
		
		//http://127.0.0.1:7070/address/onkar123
		return addressService.getUserAddress(userId);
	}
	
	@PreAuthorize("hasRole('user')")
	@PostMapping("/addNewAddress")
	public Address addNewAddress(@RequestBody @Valid AddressDTO addressDto) {
		
		//http://127.0.0.1:7070/addNewAddress
		return addressService.addUserAddress(addressDto);
	}
	
	@PreAuthorize("hasRole('user')")
	@DeleteMapping("deleteAddress/{addressId}")
	public Address deleteCartItem(@PathVariable @Min(1) Long addressId) {
		
		//http://127.0.0.1:7070/deleteAddress/1
		
		return addressService.deleteAddress(addressId);
	}
}	
