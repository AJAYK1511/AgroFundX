package agrobackend.ajayk.Service;

import java.util.List;

import agrobackend.ajayk.Dto.Loan_dto;
import agrobackend.ajayk.Dto.Response.UserLoanUsers_dto;
import agrobackend.ajayk.Entity.Loan;

public interface LoanService {
    List<Loan> getAllLoans();
    Loan_dto getByLoanId(int id);
    void postLoan(Loan_dto loandto);
    Loan putLoan(int id,Loan_dto loandto);
    void deleteLoan(int id);
    List<UserLoanUsers_dto> getAllUsers(int id);
}
