package com.naname.rfoupfccat.domain;

import com.naname.rfoupfccat.types.LitterType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LitterForm extends PersonForm {
    private String nurseryName;
    private String birthDate;
    private String firstCat;
    private String secondCat;
    private String thirdCat;
    private String fourthCat;
    private String fifthCat;
    private String sixthCat;
    private String seventhCat;
    private String eightCat;
    private String nineCat;
    private String tenCat;
    private String fatherInfo;
    private String motherInfo;
    private LitterType type;
    private String comment;
}
