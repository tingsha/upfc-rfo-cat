package com.naname.rfoupfccat.domain;

import com.naname.rfoupfccat.types.NurseryType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NurseryForm extends PersonForm {
    private String address;
    private String firstTitleRu;
    private String secondTitleRu;
    private String thirdTitleRu;
    private String firstTitleEn;
    private String secondTitleEn;
    private String thirdTitleEn;
    private NurseryType type;
    private String comment;
}
