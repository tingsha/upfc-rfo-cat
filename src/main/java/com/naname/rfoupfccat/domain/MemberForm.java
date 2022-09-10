package com.naname.rfoupfccat.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberForm extends PersonForm {
    private String address;
    private int regionNumber = 66;
    private String comment;

    public MemberForm() {
    }

    public MemberForm(String name, String surname, String patronymic, String email, String phone, String address, int regionNumber, String comment) {
        super(name, surname, patronymic, email, phone);
        this.address = address;
        this.regionNumber = regionNumber;
        this.comment = comment;
    }
}
