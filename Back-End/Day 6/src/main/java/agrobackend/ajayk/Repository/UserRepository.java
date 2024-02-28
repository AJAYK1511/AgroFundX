package agrobackend.ajayk.Repository;
import agrobackend.ajayk.Entity.FarmUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<FarmUser, Integer> {
    
}
