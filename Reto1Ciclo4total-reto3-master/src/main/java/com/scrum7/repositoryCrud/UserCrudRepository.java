package com.scrum7.repositoryCrud;

import com.scrum7.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

/**
 *
 * @author Jeison Hernandez
 */

public interface UserCrudRepository extends MongoRepository<User, Integer> {

    Optional<User> findByEmail(String email);
    Optional<User>findByEmailAndPassword(String email, String password);

    //Para seleccionar el usuario con el id maximo
    Optional<User> findTopByOrderByIdDesc();

}
