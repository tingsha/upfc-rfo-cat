package com.naname.rfoupfccat.types;

import lombok.Getter;

@Getter
public enum NurseryType {
    REGISTRATION("Регистрация нового названия питомника - 1400 рублей"),
    RE_REGISTRATION("Перерегистрация названия питомника, зарегистрированного в другой системе- 1000 рублей"),
    CERTIFICATE("Выдача удостоверения для члена коллективного питомника - 350 рублей");

    private final String description;

    NurseryType(String description) {
        this.description = description;
    }
}
