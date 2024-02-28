package agrobackend.ajayk.Service;

import java.util.List;

import agrobackend.ajayk.Dto.Loan_dto;
import agrobackend.ajayk.Entity.Loan;

public interface LoanService {
    List<Loan> getAllLoans();
    Loan_dto getByLoanId(int id);
    void postLoan(Loan_dto loandto);
    void putLoan(int loan_id,Loan_dto loandto);
}
