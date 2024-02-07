package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.DTO.ApiResponse;

public interface ImageHandlingService {
	ApiResponse uploadImage(Long pizzaId, MultipartFile image) throws IOException;
	byte[] downloadImage(Long empId) throws IOException;
}
