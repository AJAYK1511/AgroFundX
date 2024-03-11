package agrobackend.ajayk.Service.Implementation;
import java.util.ArrayList;
// import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

import agrobackend.ajayk.Dto.UserLoan_dto;
import agrobackend.ajayk.Entity.FarmUser;
import agrobackend.ajayk.Entity.Loan;
import agrobackend.ajayk.Entity.UserLoan;
import agrobackend.ajayk.Repository.LoanRepostory;
import agrobackend.ajayk.Repository.UserLoanRepository;
import agrobackend.ajayk.Repository.UserRepository;
import agrobackend.ajayk.Service.UserLoanService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserLoanserviceImpl implements UserLoanService{

    private UserLoanRepository userloanrepo;
    UserRepository userrepo;
    LoanRepostory loanrepo;

    @Override
    public List<UserLoan> getAllUserLoans()
    {
        return userloanrepo.findAll();
    }

    
    @Override
    public UserLoan postUserLoan(int userid,int loanid)
    {
        UserLoan aul=new UserLoan();
        FarmUser au=userrepo.findById(userid).orElse(null);
        Loan l=loanrepo.findById(loanid).orElse(null);
        if(au!=null && l!=null)
        {
            aul.setRem_amount(aul.getRem_amount());
            aul.setFarmuser(au);
            aul.setLoans(l);
            return userloanrepo.save(aul);
        }
        else
        {
            return null;
        } 
    }
    
    @Override
    public List<UserLoan_dto> getUserLoan(int id)
    {
        FarmUser user=userrepo.findById(id).orElse(null);
        List<UserLoan> loan=user.getUserloans();
        List<UserLoan_dto> userLoan=new ArrayList<>();
        for(UserLoan temp:loan)
        {
            UserLoan_dto ul=new UserLoan_dto();
            ul.setBalance(temp.getBalance());
            ul.setRem_amount(temp.getRem_amount());
            ul.setStatus(temp.getStatus());
            ul.setLoan(temp.getLoans());
            userLoan.add(ul);
        }
        return userLoan;
    }

//     @Override
//     public List<UsersLoans> getUsersLoans(int userid){
//         App_User app_User=userRepo.findById(userid).orElse(null);
//         List<LoanList> loanList=app_User.getLoans();
//         List<UsersLoans> usersLoans=new ArrayList<>();
//         for(LoanList temp:loanList){
//             UsersLoans userloan=new UsersLoans();
//             userloan.setId(temp.getId());
//             userloan.setLoans(temp.getLoans());
//             userloan.setStatus(temp.getStatus());
//             userloan.setAmt(temp.getAmt());
//             usersLoans.add(userloan);
//         }
//         return usersLoans;
//     }

}
