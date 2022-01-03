package edu.uclm.esi.tys2122.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.uclm.esi.tys2122.newchess.ChessMovement;
@Repository
public interface MovementRepository extends JpaRepository <ChessMovement, String> {

}
