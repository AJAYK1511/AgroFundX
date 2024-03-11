package agrobackend.ajayk.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class FarmAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int admin_id;
    private String name;
    private String password;
    private String phone;
    
    @OneToOne
    @JoinColumn(name="user_id")
    UserInfo userInfo;
}
