package edu.uclm.esi.tys2122.newGuessWho;

import javax.persistence.Entity;

import org.json.JSONObject;

import edu.uclm.esi.tys2122.model.Board;
import edu.uclm.esi.tys2122.model.Match;
import edu.uclm.esi.tys2122.tictactoe.TictactoeBoard;

@Entity
public class GuessWhoMatch extends Match {

	@Override
	protected void checkReady() {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected Board newBoard() {
		
		return new GuessWhoBoard();
	}

	@Override
	public void move(String userId, JSONObject jso) throws Exception {
		// TODO Auto-generated method stub
		
	}

}
