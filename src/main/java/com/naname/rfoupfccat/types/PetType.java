package com.naname.rfoupfccat.types;

import lombok.Getter;

@Getter
public enum PetType {
    PEDIGREE_ELECTRONIC("Родословная электронная форма 800 рублей"),
    PEDIGREE_PHYSICAL("Родословная бумажный носитель 800 рублей"),
    PEDIGREE_ALL("Родословная полный комплект 1600 рублей"),
    TRANSFER_ELECTRONIC("Трансфер электронная форма 750 рублей"),
    TRANSFER_PHYSICAL("Трансфер бумажный носитель 750 рублей"),
    TRANSFER_FULL("Трансфер полный комплект 1500 рублей");

    private final String description;

    PetType(String description) {
        this.description = description;
    }
}