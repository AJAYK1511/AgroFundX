package agrobackend.ajayk.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor

public class UserLoan {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int user_loanid;
     @Column(columnDefinition = "varchar(255) default 'pending'")
    private String status;
    private long rem_amount;
    private long balance;
    
    @ManyToOne
    FarmUser farmuser;

    @ManyToOne
    Loan loans;
}
