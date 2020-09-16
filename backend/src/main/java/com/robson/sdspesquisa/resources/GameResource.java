package com.robson.sdspesquisa.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robson.sdspesquisa.entities.Game;
import com.robson.sdspesquisa.repositories.GameRepository;

@RestController
@RequestMapping(value = "/games")
public class GameResource {

	@Autowired
	private GameRepository gameRepository;
	
	@GetMapping
	public ResponseEntity<List<Game>> findAll(){
		List<Game> list = gameRepository.findAll();
		return ResponseEntity.ok().body(list);
	}
}
