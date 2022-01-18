package edu.uclm.esi.tys2122.model;

import java.io.IOException;
import java.util.Collection;
import java.util.UUID;
import java.util.Vector;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.socket.WebSocketSession;

import edu.uclm.esi.tys2122.websockets.WrapperSession;

@Entity
@Table(name = "partida")
public abstract class Match {


	@Id
	@Column(length = 36)
	private String id;
	
	@Transient
	private Board board;
	
	@Transient
	protected Vector<User> players;
	
	@Transient
	protected User playerWithTurn; 
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "userGanador_id", referencedColumnName = "id")
	protected User winner;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "userPerdedor_id", referencedColumnName = "id")
	
	protected User looser;
	@Transient
	protected boolean draw;
	
	@Transient
	protected boolean ready;
	
	public Match() {
		this.id = UUID.randomUUID().toString();
		this.players = new Vector<>();
		this.board = newBoard();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Board getBoard() {
		return board;
	}
	
	public void setBoard(Board board) {
		this.board = board;
	}

	// TODO : no se puede añadir dos veces el mismo jugador
	public void addPlayer(User user) {
		this.players.add(user);
		checkReady();
	}
	
	public boolean isReady() {
		return ready;
	}
	
	public User getPlayerWithTurn() {
		return playerWithTurn;
	}
	
	@Transient
	public Vector<User> getPlayers() {
		return players;
	}
	
	public String getGame() {
		return this.getClass().getSimpleName();
	}

	
	
	public User getWinner() {
		return winner;
	}

	public void setWinner(User winner) {
		this.winner = winner;
	}

	public User getLooser() {
		return looser;
	}

	public void setLooser(User looser) {
		this.looser = looser;
	}

	public boolean isDraw() {
		return draw;
	}

	public void setDraw(boolean draw) {
		this.draw = draw;
	}

	public void setReady(boolean ready) {
		this.ready = ready;
	}
	
	public void setPlayers(Vector<User> players) {
		this.players = players;
	}

	public void setPlayerWithTurn(User playerWithTurn) {
		this.playerWithTurn = playerWithTurn;
	}
	
	protected User findUser(String userId) {
		for (User user : this.players)
			if (user.getId().equals(userId))
				return user;
		return null;
	}

	protected abstract void checkReady();

	protected abstract Board newBoard();

	public abstract void move(String userId, JSONObject jso) throws Exception;
	
	public void enviarMensaje(String texto, String speaker) {
		JSONObject jso = new JSONObject();
		jso.put("type", "MENSAJE DE CHAT");
		jso.put("texto", texto);
		jso.put("user", speaker);
		
		for (User player : this.players) {
			try {
				player.sendMessage(jso);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}		
	}
	
	public void enviarMensajeSalirPartida(String texto, User user) {
		JSONObject jso = new JSONObject();
		jso.put("type", "MENSAJE DE ABANDONO");
		jso.put("texto", texto);
		try {
			user.sendMessage(jso);	
		}catch (IOException e) {
			e.printStackTrace();
		}
		
	}

}
