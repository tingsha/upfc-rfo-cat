package com.naname.rfoupfccat.types;

import lombok.Getter;

@Getter
public enum CertificateType {
    ELECTRICAL_CERTIFICATE("Справка электронная форма 2000 рублей"),
    PHYSICAL_CERTIFICATE("Справка бумажный носитель 2500 рублей"),
    ALL_CERTIFICATES("Справка полный комплект 4300 рублей");

    private final String description;

    CertificateType(String description) {
        this.description = description;
    }
}
