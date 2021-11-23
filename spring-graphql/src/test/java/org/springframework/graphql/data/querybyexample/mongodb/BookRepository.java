package org.springframework.graphql.data.querybyexample.mongodb;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.graphql.data.GraphQlRepository;

@GraphQlRepository
public interface BookRepository extends MongoRepository<Book, String> {
}
