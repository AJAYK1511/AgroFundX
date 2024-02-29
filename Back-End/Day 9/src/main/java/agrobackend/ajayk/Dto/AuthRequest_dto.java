package agrobackend.ajayk.Dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class AuthRequest_dto {
    
    private String username;
    private String password;
}
