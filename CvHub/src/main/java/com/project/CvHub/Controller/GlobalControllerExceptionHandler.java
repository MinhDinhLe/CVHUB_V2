/**
 *
 */
package com.project.CvHub.Controller;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.nio.file.AccessDeniedException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;



@Slf4j
public class GlobalControllerExceptionHandler {

	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<Map<String, Object>> defaultErrorHandler(HttpServletRequest req, Exception e) {
		log.error("Unknown error", e);

		Map<String, Object> errorResponse = new HashMap<>();
		errorResponse.put("timestamp", new Date());
		errorResponse.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
		errorResponse.put("error", "Internal Server Error");
		errorResponse.put("message", e.getMessage());
		errorResponse.put("path", req.getRequestURL().toString());

		return ResponseEntity
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(errorResponse);
	}

	@ExceptionHandler(value = {IllegalArgumentException.class, IllegalStateException.class})
	public ResponseEntity<Map<String, Object>> handleBadRequest(HttpServletRequest req, Exception e) {
		log.error("Bad request error", e);

		Map<String, Object> errorResponse = new HashMap<>();
		errorResponse.put("timestamp", new Date());
		errorResponse.put("status", HttpStatus.BAD_REQUEST.value());
		errorResponse.put("error", "Bad Request");
		errorResponse.put("message", e.getMessage());
		errorResponse.put("path", req.getRequestURL().toString());

		return ResponseEntity
				.status(HttpStatus.BAD_REQUEST)
				.body(errorResponse);
	}

	@ExceptionHandler(value = {AccessDeniedException.class})
	public ResponseEntity<Map<String, Object>> handleForbidden(HttpServletRequest req, Exception e) {
		log.error("Access denied", e);

		Map<String, Object> errorResponse = new HashMap<>();
		errorResponse.put("timestamp", new Date());
		errorResponse.put("status", HttpStatus.FORBIDDEN.value());
		errorResponse.put("error", "Forbidden");
		errorResponse.put("message", e.getMessage());
		errorResponse.put("path", req.getRequestURL().toString());

		return ResponseEntity
				.status(HttpStatus.FORBIDDEN)
				.body(errorResponse);
	}

	@ExceptionHandler(value = {NoHandlerFoundException.class, HttpRequestMethodNotSupportedException.class})
	public ResponseEntity<Map<String, Object>> handleNotFound(HttpServletRequest req, Exception e) {
		log.error("Resource not found", e);

		Map<String, Object> errorResponse = new HashMap<>();
		errorResponse.put("timestamp", new Date());
		errorResponse.put("status", HttpStatus.NOT_FOUND.value());
		errorResponse.put("error", "Not Found");
		errorResponse.put("message", e.getMessage());
		errorResponse.put("path", req.getRequestURL().toString());

		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.body(errorResponse);
	}
}