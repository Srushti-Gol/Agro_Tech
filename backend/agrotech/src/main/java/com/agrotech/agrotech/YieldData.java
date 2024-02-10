package com.agrotech.agrotech;

import com.fasterxml.jackson.annotation.JsonProperty;

public class YieldData {
    @JsonProperty("District_Name")
    private String districtName;

    @JsonProperty("Season")
    private String season;

    @JsonProperty("Crop")
    private String crop;

    @JsonProperty("Area")
    private float area;

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    @Override
    public String toString() {
        return "YieldData{" +
                "districtName='" + districtName + '\'' +
                ", season='" + season + '\'' +
                ", crop='" + crop + '\'' +
                ", area=" + area +
                '}';
    }
}
