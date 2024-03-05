package agrobackend.ajayk.Entity;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class FarmUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int id;
    private String username;
    private String email;
    private String password;

    @OneToMany(mappedBy = "farmuser")
    @JsonIgnore
    List<UserLoan> userloans;

    @OneToOne
    @JoinColumn(name="user_id")
    UserInfo userInfo;
    
}


