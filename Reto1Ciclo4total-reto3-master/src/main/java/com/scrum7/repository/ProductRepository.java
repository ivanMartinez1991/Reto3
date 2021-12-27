package com.scrum7.repository;

import com.scrum7.model.Product;
import com.scrum7.repositoryCrud.ProductCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author Jeison Hernandez
 */

@Repository
public class ProductRepository {

    @Autowired
    private ProductCrudRepository crudInterface;

    public List<Product> getAll() {
        return crudInterface.findAll();
    }

    public Optional<Product> getProduct(String reference) {
        return crudInterface.findById(reference);
    }

    public Product create(Product product) {
        return crudInterface.save(product);
    }

    public void update(Product product) {
        crudInterface.save(product);
    }

    public void delete(Product product) {
        crudInterface.delete(product);
    }
}
