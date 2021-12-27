package edu.uclm.esi.tys2122.websockets;

import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpSession;

import org.springframework.web.socket.WebSocketSession;


public class WrapperSession {

	
	private ConcurrentHashMap<String, WrapperSession> sessions = new ConcurrentHashMap<>();

	private WebSocketSession wsSession;
	private HttpSession httpSession;

	public WrapperSession(WebSocketSession wsSession) {
		this.wsSession = wsSession;
	}

	public void setHttpSession(HttpSession httpSession) {
		this.httpSession = httpSession;
	}

	public HttpSession getHttpSession() {
		return httpSession;
	}
	
	public WebSocketSession getWsSession() {
		return wsSession;
	}

	public void setWsSession(WebSocketSession wsSession2) {
		this.wsSession = wsSession2;
	}
}
