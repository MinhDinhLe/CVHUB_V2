package com.project.CvHub.Service;

import java.io.IOException;
import java.util.Map;

import com.project.CvHub.Entity.User;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public interface ParsingCVService  {
	String extractTextFromPdfOrWord(MultipartFile file) throws IOException;
	 Map<String, String> parseContent(String content, User user);
}