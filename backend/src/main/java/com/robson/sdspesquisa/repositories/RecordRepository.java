package com.robson.sdspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robson.sdspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
