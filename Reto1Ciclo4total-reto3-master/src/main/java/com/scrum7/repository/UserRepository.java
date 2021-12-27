package com.scrum7.repository;

/**
 *
 * @author Jeison Hernandez
 */

import com.scrum7.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.scrum7.repositoryCrud.UserCrudRepository;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {

    @Autowired
    private UserCrudRepository userCrudRepository;

    public List<User> getAll(){
        return (List<User>) userCrudRepository.findAll();
    }
    public Optional<User> getUser (int id){
        return userCrudRepository.findById(id);
    }
    public User  registrar (User user){
        return userCrudRepository.save(user);
    }
    public void update(User user) {userCrudRepository.save(user);}
    public void delete(User user) {userCrudRepository.delete(user);}
    public boolean existeEmail(String email){
        Optional<User> usuario = userCrudRepository.findByEmail(email);
        return !usuario.isEmpty();
    }
    public Optional<User> autenticarUsuario(String email, String password){
        return userCrudRepository.findByEmailAndPassword(email, password);
    }
    public Optional<User> lastUserId(){
        return userCrudRepository.findTopByOrderByIdDesc();
    }


}
