package edu.uclm.esi.tys2122.newGuessWho;

import edu.uclm.esi.tys2122.model.Game;
import edu.uclm.esi.tys2122.model.Match;

public class GuessWhoGame extends Game {
	
	public GuessWhoGame() {
		super();
	}

	@Override
	public Match newMatch() {
		return new GuessWhoMatch();
	}

}
