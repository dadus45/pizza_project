package com.app.DTO;

import java.time.LocalDate;

import com.app.entity.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class OrderPendingDto {
	private Long  id;
    private LocalDate orderDate;
	
	private String userName;
	
	
	private OrderStatus orderStatus;

}
