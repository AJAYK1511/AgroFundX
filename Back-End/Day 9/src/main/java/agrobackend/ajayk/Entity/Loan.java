package agrobackend.ajayk.Entity;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int loan_id;
    private String loan_name;
    private String loan_type;
    private int interest;
    private int time_period;
    private int loan_amount;
    private String loan_description;

    @OneToMany(mappedBy = "loans")
    @JsonIgnore
    List<UserLoan> userloan;

}
