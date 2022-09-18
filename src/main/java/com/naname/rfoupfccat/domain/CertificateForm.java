package com.naname.rfoupfccat.domain;

import com.naname.rfoupfccat.types.CertificateType;
import lombok.Data;

@Data
public class CertificateForm {
    private String nicknameRu;
    private String nicknameEn;
    private String sex;
    private String breed;
    private String color;
    private String birthDate;
    private String microchip;
    private String nameRu;
    private String nameEn;
    private String email;
    private String phone;
    private CertificateType type;
    private String comment;
}
