package com.naname.rfoupfccat.types;

import lombok.Getter;

@Getter
public enum PetType {
    ELECTRONIC_FORM("Родословная электронная форма 400 рублей"),
    PHYSICAL_FORM("Родословная бумажный носитель 400 рублей"),
    ALL_FORMS("Родословная полный комплект 800 рублей"),
    ELECTRONIC_TRANSFER("Трансфер электронная форма 350 рублей"),
    PHYSICAL_TRANSFER("Трансфер бумажный носитель 350 рублей"),
    TRANSFER_FULL("Трансфер полный комплект 700 рублей");

    private String description;

    PetType(String description) {
        this.description = description;
    }
}
