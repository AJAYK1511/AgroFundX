package agrobackend.ajayk.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private int user_id;
    private String contact_email;
    private String phone;
    
}
