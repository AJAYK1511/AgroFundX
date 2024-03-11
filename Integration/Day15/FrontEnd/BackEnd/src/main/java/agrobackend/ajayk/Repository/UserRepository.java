package agrobackend.ajayk.Repository;
import agrobackend.ajayk.Entity.FarmUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<FarmUser, Integer> {
    
    FarmUser findByUsername(String username);
}
