package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Address;
import com.app.entity.User;

public interface AddressRepo extends JpaRepository<Address, Long> {

	List<Address> findByUser(User user);
}
