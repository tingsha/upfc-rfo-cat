package com.naname.rfoupfccat.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberForm extends PersonForm {
    private String address;
    private String region;
    private String comment;

    public MemberForm() {
    }

    public MemberForm(String name, String surname, String patronymic, String email, String phone, String address, String region, String comment) {
        super(name, surname, patronymic, email, phone);
        this.address = address;
        this.region = region;
        this.comment = comment;
    }
}
