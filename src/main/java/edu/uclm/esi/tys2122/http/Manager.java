package edu.uclm.esi.tys2122.http;

import java.io.IOException;
import java.io.InputStream;
import java.util.Vector;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import edu.uclm.esi.tys2122.model.Game;
import edu.uclm.esi.tys2122.model.Match;
import edu.uclm.esi.tys2122.model.User;
import edu.uclm.esi.tys2122.websockets.WrapperSession;

@Component
public class Manager {
	
	private Vector<Game> games;
	
	private JSONObject configuration;
	
	private ConcurrentHashMap<String, WrapperSession> ajedrezSessionsPorHttp;
	private ConcurrentHashMap<String, WrapperSession> ajedrezSessionsPorWs;
	private ConcurrentHashMap<String, HttpSession> httpSessions;
	private ConcurrentHashMap<String, Match> matches;


	private Manager() {
		this.games = new Vector<>();
		this.matches = new ConcurrentHashMap<>();
		this.ajedrezSessionsPorHttp = new ConcurrentHashMap<>();
		this.ajedrezSessionsPorWs = new ConcurrentHashMap<>();
		this.httpSessions = new ConcurrentHashMap<>();
		try {
			loadParameters();
		} catch (Exception e) {
			System.err.println("Error al leer el fichero parametros.txt: " + e.getMessage());
			System.exit(-1);
		}
	}
	
	private static class ManagerHolder {
		static Manager singleton=new Manager();
	}
	
	@Bean
	public static Manager get() {
		return ManagerHolder.singleton;
	}

	public JSONObject getConfiguration() {
		return configuration;
	}
	
	private void loadParameters() throws IOException {
		this.configuration = read("./parametros.txt");
	}
	
	private JSONObject read(String fileName) throws IOException {
		 ClassLoader classLoader = getClass().getClassLoader();
		 try (InputStream fis = classLoader.getResourceAsStream(fileName)) {
			byte[] b = new byte[fis.available()];
			fis.read(b);
			String s = new String(b);
			return new JSONObject(s);
		 }
	}
	
	public JSONArray readFileAsJSONArray(String fileName) throws IOException {
		ClassLoader classLoader = getClass().getClassLoader();
		 try (InputStream fis = classLoader.getResourceAsStream(fileName)) {
			byte[] b = new byte[fis.available()];
			fis.read(b);
			String s = new String(b);
			return new JSONArray(s);
		 }
	}

	public void clearGames() {
		this.games.clear();
	}

	public void add(Game game) {
		this.games.add(game);
	}
	
	public Vector<Game> getGames() {
		return games;
	}

	public Game findGame(String gameName) {
		for (Game game : this.games)
			if (game.getName().equals(gameName))
				return game;
		return null;
	}
	public void add(WrapperSession wrapperSession, String httpSessionId) {
		HttpSession httpSession = this.httpSessions.get(httpSessionId);
		User user = (User) httpSession.getAttribute("user");
		user.setSession(wrapperSession);
		wrapperSession.setHttpSession(httpSession);
		wrapperSession.setWsSession(wrapperSession.getWsSession());
		this.ajedrezSessionsPorHttp.put(httpSessionId, wrapperSession);
		this.ajedrezSessionsPorWs.put(wrapperSession.getWsSession().getId(), wrapperSession);
	}

	public void add(HttpSession session) {
		this.httpSessions.put(session.getId(), session);
	}

	public WrapperSession findWrapperSession(String id) {
		return this.ajedrezSessionsPorWs.get(id);
	}

	public void add(Match match) {
		this.matches.put(match.getId(), match);
		
	}

	public Match findMatch(String matchId) {
		return this.matches.get(matchId);
		
	}
	public ConcurrentHashMap<String, WrapperSession> getAjedrezSessionsPorHttp() {
		return ajedrezSessionsPorHttp;
	}

	public void setAjedrezSessionsPorHttp(ConcurrentHashMap<String, WrapperSession> ajedrezSessionsPorHttp) {
		this.ajedrezSessionsPorHttp = ajedrezSessionsPorHttp;
	}

	public ConcurrentHashMap<String, WrapperSession> getAjedrezSessionsPorWs() {
		return ajedrezSessionsPorWs;
	}

	public void setAjedrezSessionsPorWs(ConcurrentHashMap<String, WrapperSession> ajedrezSessionsPorWs) {
		this.ajedrezSessionsPorWs = ajedrezSessionsPorWs;
	}

	
}
