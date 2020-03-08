package com.sapient.creditcard.app.demo.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.Currency;

@Builder
@Getter
public class CreditCard {
    private String name;
    private String cardNo;
    private Currency currency = Currency.getInstance("GBP");
    private double balance;
    private int limit;
}
