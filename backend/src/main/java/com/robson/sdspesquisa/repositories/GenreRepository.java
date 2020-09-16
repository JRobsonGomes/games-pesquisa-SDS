package com.robson.sdspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.sdspesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
