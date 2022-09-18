package com.naname.rfoupfccat.domain;

import com.naname.rfoupfccat.types.PetType;
import lombok.Data;

@Data
public class PetForm {
    private String nickname;
    private String sex;
    private String birthDate;
    private String breed;
    private String color;
    private String microchip;
    private String breeder;
    private String owner;
    private String email;
    private String phone;
    private PetType type;
    private String comment;
}
