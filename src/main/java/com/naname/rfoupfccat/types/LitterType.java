package com.naname.rfoupfccat.types;

import lombok.Getter;

@Getter
public enum LitterType {
    ELECTRONIC_CARD("Карточка котенка электронная форма 200 рублей"),
    PHYSICAL_CARD("Карточка котенка бумажный носитель 200 рублей"),
    ALL("Карточка котенка полный комплект 400 рублей");

    private final String description;

    LitterType(String description) {
        this.description = description;
    }
}
