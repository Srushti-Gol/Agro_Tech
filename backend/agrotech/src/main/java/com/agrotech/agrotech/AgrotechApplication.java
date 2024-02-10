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
        System.out.println(cropData.toString());

        String cropDataJson = convertToJsonString(cropData);

        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:5000/predictCrop";
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> requestEntity = new HttpEntity<>(cropDataJson, headers);

        System.out.println(requestEntity);
        String prediction = restTemplate.postForObject(url, requestEntity, String.class);
        return prediction;
    }

    private String convertToJsonString(CropData cropData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(cropData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}"; 
        }
    }

    @PostMapping("/predictFert")
    public String predictFert(@RequestBody FertilizerData fertData) {
        System.out.println(fertData.toString());

        String fertDataJson = convertToJsonString(fertData);

        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:5000/predictFert";
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> requestEntity = new HttpEntity<>(fertDataJson, headers);

        System.out.println(requestEntity);
        String prediction = restTemplate.postForObject(url, requestEntity, String.class);
        return prediction;
    }

    private String convertToJsonString(FertilizerData fertData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(fertData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}"; 
        }
    }

    @PostMapping("/predictYield")
    public String predictYield(@RequestBody YieldData yieldData) {
        System.out.println(yieldData.toString());
        String yieldDataJson = convertToJsonString(yieldData);

        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:5000/predictYield";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> requestEntity = new HttpEntity<>(yieldDataJson, headers);

        System.out.println(requestEntity);
        String prediction = restTemplate.postForObject(url, requestEntity, String.class);
        return prediction;
    }

    private String convertToJsonString(YieldData yieldData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(yieldData);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}"; 
        }
    }
}
