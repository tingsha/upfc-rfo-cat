package com.naname.rfoupfccat.types;

import lombok.Getter;

@Getter
public enum CertificateType {
    ELECTRICAL_CERTIFICATE("Справка электронная форма 1000 рублей"),
    PHYSICAL_CERTIFICATE("Справка бумажный носитель 1000 рублей"),
    ALL_CERTIFICATES("Справка полный комплект 1800 рублей");

    private String description;

    CertificateType(String description) {
        this.description = description;
    }
}
