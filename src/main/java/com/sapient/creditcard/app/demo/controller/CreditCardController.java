package com.sapient.creditcard.app.demo.controller;

import com.sapient.creditcard.app.demo.dto.CreditCard;
import com.sapient.creditcard.app.demo.repository.CCRepository;
import com.sapient.creditcard.app.demo.utility.CCUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CreditCardController {

    @Autowired
    private CCRepository ccRepository;

    @RequestMapping(name = "addCard", method = RequestMethod.GET, path = "/addCard")
    @ResponseBody
    public String addCreditCard(){
        String response = "";
        if(CCUtility.isCardValidNumber("card.getCardNo()"))
            return "card added";

        return response;
    }
}
