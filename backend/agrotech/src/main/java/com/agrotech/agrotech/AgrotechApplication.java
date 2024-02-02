package com.agrotech.agrotech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;


@SpringBootApplication
@RestController
public class AgrotechApplication {

    public static void main(String[] args) {
        SpringApplication.run(AgrotechApplication.class, args);
    }

    @PostMapping("/predictCrop")
    public String predictCrop(@RequestBody CropData cropData) {
        // Convert CropData object to JSON string
        System.out.println(cropData.toString());

        String cropDataJson = convertToJsonString(cropData);

        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:5000/predictCrop"; // URL of your Flask API
        
        // Set the Content-Type header to "application/json"
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> requestEntity = new HttpEntity<>(cropDataJson, headers);

        System.out.println(requestEntity);
        // Make the POST request with the updated requestEntity
        String prediction = restTemplate.postForObject(url, requestEntity, String.class);
        return prediction;
    }

    // Method to convert CropData object to JSON string
    private String convertToJsonString(CropData cropData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(cropData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}"; // Return empty JSON object if conversion fails
        }
    }


    @PostMapping("/predictFert")
    public String predictFert(@RequestBody FertilizerData fertData) {
        // Convert FertilizerData object to JSON string
        System.out.println(fertData.toString());

        String fertDataJson = convertToJsonString(fertData);

        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:5000/predictFert"; // URL of your Flask API
        
        // Set the Content-Type header to "application/json"
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> requestEntity = new HttpEntity<>(fertDataJson, headers);

        System.out.println(requestEntity);
        // Make the POST request with the updated requestEntity
        String prediction = restTemplate.postForObject(url, requestEntity, String.class);
        return prediction;
    }

    // Method to convert FertilizerData object to JSON string
    private String convertToJsonString(FertilizerData fertData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(fertData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}"; // Return empty JSON object if conversion fails
        }
    }

}
