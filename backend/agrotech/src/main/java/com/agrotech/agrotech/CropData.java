package com.agrotech.agrotech;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CropData {
    @JsonProperty("Nitrogen")
    private float Nitrogen;

    @JsonProperty("Phosphorous")
    private float Phosphorous;

    @JsonProperty("Potassium")
    private float Potassium;

    @JsonProperty("Temperature")
    private float Temperature;

    @JsonProperty("Humidity")
    private float Humidity;

    @JsonProperty("ph")
    private float ph;

    @JsonProperty("Rainfall")
    private float Rainfall;

    public float getNitrogen() {
        return Nitrogen;
    }

    public void setNitrogen(float nitrogen) {
        Nitrogen = nitrogen;
    }

    public float getPhosphorous() {
        return Phosphorous;
    }

    public void setPhosphorous(float phosphorous) {
        Phosphorous = phosphorous;
    }

    public float getPotassium() {
        return Potassium;
    }

    public void setPotassium(float potassium) {
        Potassium = potassium;
    }

    public float getTemperature() {
        return Temperature;
    }

    public void setTemperature(float temperature) {
        Temperature = temperature;
    }

    public float getHumidity() {
        return Humidity;
    }

    public void setHumidity(float humidity) {
        Humidity = humidity;
    }

    public float getPh() {
        return ph;
    }

    public void setPh(float ph) {
        this.ph = ph;
    }

    public float getRainfall() {
        return Rainfall;
    }

    public void setRainfall(float rainfall) {
        Rainfall = rainfall;
    }

    @Override
    public String toString() {
        return "CropData{" +
                "Nitrogen=" + Nitrogen +
                ", Phosphorous=" + Phosphorous +
                ", Potassium=" + Potassium +
                ", Temperature=" + Temperature +
                ", Humidity=" + Humidity +
                ", ph=" + ph +
                ", Rainfall=" + Rainfall +
                '}';
    }
}
