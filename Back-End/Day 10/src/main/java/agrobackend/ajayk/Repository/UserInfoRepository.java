package agrobackend.ajayk.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import agrobackend.ajayk.Entity.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo,Integer>{
    
    Optional<UserInfo> findByName(String username);
    
}
