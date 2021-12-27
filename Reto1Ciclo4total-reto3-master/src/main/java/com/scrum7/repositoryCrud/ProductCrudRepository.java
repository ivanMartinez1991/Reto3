package com.scrum7.repositoryCrud;

import com.scrum7.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Jeison Hernandez
 */

public interface ProductCrudRepository extends MongoRepository<Product, String> {
}
