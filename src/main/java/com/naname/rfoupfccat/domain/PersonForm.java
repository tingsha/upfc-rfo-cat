package com.naname.rfoupfccat.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;

/**
 * Форма для заполнения информации о человеке
 */
@Getter
@Setter
public class PersonForm {
    private String name;
    private String surname;
    @Nullable
    private String patronymic;
    private String email;
    @Nullable
    private String phone;

    public PersonForm() {
    }

    public PersonForm(String name, String surname, @Nullable String patronymic, String email, @Nullable String phone) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.email = email;
        this.phone = phone;
    }
}
