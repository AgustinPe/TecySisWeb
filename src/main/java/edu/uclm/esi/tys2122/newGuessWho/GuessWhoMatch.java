package edu.uclm.esi.tys2122.newGuessWho;

import javax.persistence.Entity;
import javax.persistence.Transient;

import org.json.JSONArray;
import org.json.JSONObject;

import edu.uclm.esi.tys2122.model.Board;
import edu.uclm.esi.tys2122.model.Match;
import edu.uclm.esi.tys2122.model.User;

@Entity
public class GuessWhoMatch extends Match {
	@Transient
	private String cartaA, cartaB;
	@Transient
	private User jugadorA, jugadorB;
	@Transient
	private int contadorA = 0, contadorB = 0;
	@Transient
	private boolean acierto = false;
	@Transient
	private int intentos = 0;
	
	
	public int getIntentos() {
		return intentos;
	}
	
	public boolean isAcierto() {
		return acierto;
	}
	

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
		String type = jso.optString("type");
		if (type.equals("carta")) {
			String carta = jso.getString("carta");
			User user = this.findUser(userId);
			if (user==this.players.get(0)) {
				this.cartaA = carta;
				this.jugadorA = user;
				}
			else {
				this.cartaB = carta;
				this.jugadorB = user;
			}
				
		} else if (type.equals("cartaQueAdivino")) {
			String carta = jso.getString("carta");
			User user = this.findUser(userId);
			if (user==this.players.get(0)) {
				contadorA++;
				intentos++;
				if(this.cartaB.equals(carta) && contadorA <2) {
					this.acierto = true;
					this.winner = this.jugadorA;
					this.looser = this.jugadorB;
					//metodo para acabar

				}
				else if (contadorA > 1) {
					this.winner = this.jugadorB;
					this.looser = this.jugadorA;

				}
				
			}else {
				contadorB++;
				intentos++;
				if(this.cartaA.equals(carta) && contadorB <2) {
					this.acierto = true;
					this.winner = this.jugadorB;
					this.looser = this.jugadorA;

				}
				else if (contadorB > 1) {
					this.winner = this.jugadorA;
					this.looser = this.jugadorB;
				}
			}
				
		}
		
	}

}
