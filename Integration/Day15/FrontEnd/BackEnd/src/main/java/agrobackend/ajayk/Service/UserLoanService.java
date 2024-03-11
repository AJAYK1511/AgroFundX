package agrobackend.ajayk.Service;
import java.util.List;

import agrobackend.ajayk.Dto.UserLoan_dto;
import agrobackend.ajayk.Entity.UserLoan;

public interface UserLoanService {

    List<UserLoan> getAllUserLoans();
    UserLoan postUserLoan(int id1,int id2);
    List<UserLoan_dto> getUserLoan(int id);
}





