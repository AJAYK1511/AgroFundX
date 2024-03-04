package agrobackend.ajayk.Service.Implementation;
import java.util.List;
import org.springframework.stereotype.Service;
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
            aul.setFarmuser(au);
            aul.setLoans(l);
            return userloanrepo.save(aul);
        }
        else
        {
            return null;
        } 
    }
    
    // @Override
    // public List<UserLoan> getByUserLoanId(int id)
    // {
    //     FarmUser user=userrepo.findById(id).orElse(null);
    //     List<Loan> loan=user.getUserloans();
    //     List<UserLoan_dto>
    // }
}
