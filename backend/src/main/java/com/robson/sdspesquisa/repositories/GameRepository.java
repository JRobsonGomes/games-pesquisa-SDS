package com.robson.sdspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.sdspesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}