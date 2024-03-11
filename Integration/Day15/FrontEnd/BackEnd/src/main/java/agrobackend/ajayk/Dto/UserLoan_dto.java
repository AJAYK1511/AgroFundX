package agrobackend.ajayk.Dto;

import agrobackend.ajayk.Entity.Loan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserLoan_dto {

    private int user_loanid;
    private String status;
    private long rem_amount;
    private long balance;
    Loan loan;

}
