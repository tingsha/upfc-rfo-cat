package com.naname.rfoupfccat;

import java.util.HashMap;
import java.util.Map;

public class Constants {

    /**
     * Карта [название поля в форме] -> [человекочитаемое название]
     */
    public static final Map<String, String> LABEL_BY_KEY = new HashMap<>();

    static {
        LABEL_BY_KEY.put("name", "Имя");
        LABEL_BY_KEY.put("surname", "Фамилия");
        LABEL_BY_KEY.put("patronymic", "Отчество");
        LABEL_BY_KEY.put("address", "Адрес");
        LABEL_BY_KEY.put("region", "Субъект РФ");
        LABEL_BY_KEY.put("email", "Email");
        LABEL_BY_KEY.put("phone", "Телефон");
        LABEL_BY_KEY.put("message", "Сообщение");
        LABEL_BY_KEY.put("nameRu1", "Первый вариант названия на русском");
        LABEL_BY_KEY.put("nameRu2", "Второй вариант названия на русском");
        LABEL_BY_KEY.put("nameRu3", "Третий вариант названия на русском");
        LABEL_BY_KEY.put("nameEn1", "Первый вариант названия на английском");
        LABEL_BY_KEY.put("nameEn2", "Второй вариант названия на английском");
        LABEL_BY_KEY.put("nameEn3", "Третий вариант названия на английском");
    }
}
