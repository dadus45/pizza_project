package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.DTO.AddressDTO;
import com.app.entity.Address;
import com.app.entity.User;
import com.app.repository.AddressRepo;
import com.app.repository.UserRepo;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepo addressRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Address addUserAddress(AddressDTO addressDto) {
		
		Address address = mapper.map(addressDto, Address.class);
		User user = userRepo.findById(addressDto.getUserName()).orElseThrow();
		address.setUser(user);
		return addressRepo.save(address);
	}

	@Override
	public List<AddressDTO> getUserAddress(String userId) {
		
		User user = userRepo.findById(userId).orElseThrow();
		List<Address> addressList = addressRepo.findByUser(user);
		List<AddressDTO> addressDto = new ArrayList<AddressDTO>();
		
		addressList.forEach((address)->{
			
			AddressDTO map = mapper.map(address,AddressDTO.class);
			map.setUserName(address.getUser().getUserName());
			addressDto.add(map);
		});
		
		
		return addressDto;
	}

	@Override
	public Address deleteAddress(Long addressId) {
		// TODO Auto-generated method stub
		Address address = addressRepo.findById(addressId).orElseThrow();
		
		addressRepo.deleteById(addressId);
		
		return address;
	}

}
