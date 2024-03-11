package agrobackend.ajayk.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrobackend.ajayk.Entity.FarmAdmin;
@Repository
public interface AdminRepository extends JpaRepository<FarmAdmin,Integer> {
    
}
