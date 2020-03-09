package com.sapient.creditcard.app.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Currency;
import java.util.Locale;

@Builder
@Getter
@Entity
@Table(name = "credit_card")
@NoArgsConstructor
@AllArgsConstructor
public class CreditCard {

    @Column(name = "f_name")
    private String name;

    @Id
    @Column(name = "f_card_no")
    private String cardNo;

    @Column(name = "f_currency")
    private String currency;

    @Column(name = "f_balance")
    private double balance;

    @Column(name = "f_limit")
    private int limit;

    @PrePersist
    public void onSave(){
        balance = 0;
        currency = Currency.getInstance(Locale.UK).getCurrencyCode();
    }
}
