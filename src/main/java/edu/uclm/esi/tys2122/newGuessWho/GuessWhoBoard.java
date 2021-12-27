package edu.uclm.esi.tys2122.newGuessWho;

import edu.uclm.esi.tys2122.model.Board;


public class GuessWhoBoard extends Board {

	private static final int ARTURO = 1;
	private static final int CELIA = 2;
	private static final int ESTHER = 3;
	private static final int HECTOR = 4;
	private static final int MANUEL = 5;
	private static final int MARIA = 6;
	private static final int PABLO = 7;
	private static final int RAQUEL = 8;
	private static final int RICARDO = 9;
	private static final int SARA = 10;
	private static final int SIMON = 11;
	private static final int SOFIA = 12;
	
	private int[][] squares;


	
	public GuessWhoBoard() {
		this.squares = new int[3][4];
		for (int i=0; i<3; i++)
			for (int j=0; j<4; j++)
				this.squares[i][j] = 0;
		
		this.squares[0][0] = ARTURO;
		this.squares[0][1] = CELIA;
		this.squares[0][2] = ESTHER;
		this.squares[0][3] = HECTOR;
		
		this.squares[1][0] = MANUEL;
		this.squares[1][1] = MARIA;
		this.squares[1][2] = PABLO;
		this.squares[1][3] = RAQUEL;
		
		this.squares[2][0] = RICARDO;
		this.squares[2][1] = SARA;
		this.squares[2][2] = SIMON;
		this.squares[2][3] = SOFIA;
	}
	
	public int[][] getSquares() {
		return squares;
	}
	
}
