package com.agrotech.agrotech;
import com.fasterxml.jackson.annotation.JsonProperty;

public class FertilizerData {
    @JsonProperty("Temperature")
    private float temperature;

    @JsonProperty("Humidity")
    private float humidity;

    @JsonProperty("Moisture")
    private float moisture;

    @JsonProperty("Soil_Type")
    private String soilType;

    @JsonProperty("Crop_Type")
    private String cropType;

    @JsonProperty("Nitrogen")
    private float nitrogen;

    @JsonProperty("Phosphorous")
    private float phosphorous;

    @JsonProperty("Potassium")
    private float potassium;

    public float getTemperature() {
        return temperature;
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }

    public float getHumidity() {
        return humidity;
    }

    public void setHumidity(float humidity) {
        this.humidity = humidity;
    }

    public float getMoisture() {
        return moisture;
    }

    public void setMoisture(float moisture) {
        this.moisture = moisture;
    }

    public String getSoilType() {
        return soilType;
    }

    public void setSoilType(String soilType) {
        this.soilType = soilType;
    }

    public String getCropType() {
        return cropType;
    }

    public void setCropType(String cropType) {
        this.cropType = cropType;
    }

    public float getNitrogen() {
        return nitrogen;
    }

    public void setNitrogen(float nitrogen) {
        this.nitrogen = nitrogen;
    }

    public float getPhosphorous() {
        return phosphorous;
    }

    public void setPhosphorous(float phosphorous) {
        this.phosphorous = phosphorous;
    }

    public float getPotassium() {
        return potassium;
    }

    public void setPotassium(float potassium) {
        this.potassium = potassium;
    }

    @Override
    public String toString() {
        return "FertilizerData{" +
                "temperature=" + temperature +
                ", humidity=" + humidity +
                ", moisture=" + moisture +
                ", soilType='" + soilType + '\'' +
                ", cropType='" + cropType + '\'' +
                ", nitrogen=" + nitrogen +
                ", phosphorous=" + phosphorous +
                ", potassium=" + potassium +
                '}';
    }
}
