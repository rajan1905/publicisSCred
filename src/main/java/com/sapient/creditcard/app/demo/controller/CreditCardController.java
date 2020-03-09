package com.sapient.creditcard.app.demo.controller;

import com.sapient.creditcard.app.demo.dto.CreditCard;
import com.sapient.creditcard.app.demo.repository.CCRepository;
import com.sapient.creditcard.app.demo.utility.CCUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CreditCardController {

    @Autowired
    private CCRepository ccRepository;

    @PostMapping
    public ResponseEntity addCreditCard(@RequestParam String name,
                                        @RequestParam String cardNo,
                                        @RequestParam int limit){
        ResponseEntity response = new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

        
        return response;
    }
}
