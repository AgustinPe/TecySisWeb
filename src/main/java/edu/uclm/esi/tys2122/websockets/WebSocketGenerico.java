package edu.uclm.esi.tys2122.websockets;


import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Vector;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import edu.uclm.esi.tys2122.http.Manager;
import edu.uclm.esi.tys2122.model.Match;
import edu.uclm.esi.tys2122.model.User;

@Component
public class WebSocketGenerico extends TextWebSocketHandler {
	
	String matchId;

	@Override
	public void afterConnectionEstablished(WebSocketSession wsSession) throws Exception {
		wsSession.setBinaryMessageSizeLimit(1000*1024*1024);
		System.out.println(wsSession.getId());
		
		HttpHeaders headers = wsSession.getHandshakeHeaders();
		List<String> cookies = headers.get("cookie");
		
		String cookie = cookies.get(0);
		String[] tokens = cookie.split(";");
		String httpSessionId = null;
		for (String token : tokens) {
			if (token.contains("JSESSIONID")) {
				int posIgual = token.indexOf('=');
				httpSessionId = token.substring(posIgual+1).trim();
			}
		}
		WrapperSession ajedrezSesion = new WrapperSession(wsSession);
		Manager.get().add(ajedrezSesion, httpSessionId);
		
		//saludarDeVezEnCuando(session);
	}
	
	private void saludarDeVezEnCuando(WebSocketSession session) {
		Runnable r = new Runnable() {
			
			@Override
			public void run() {
				while (true) {
					try {
						session.sendMessage(new TextMessage("Hola, user agent"));
						Thread.sleep(5000);
					} catch (IOException | InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		};
		new Thread(r).start();
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		// PREGUNTAR A MACARIO
		if(matchId != null) {
			Match match = Manager.get().findMatch(matchId);
			User userLooser = (User) session.getAttributes().get("user");
			match.setLooser(userLooser);
			Vector<User> users = match.getPlayers();
			for (User usuario : users)
				if (!usuario.getId().equals(userLooser.getId()))
					match.setWinner(usuario);
			String mensaje = "El jugador "+match.getWinner().getName()+" ha ganado.\nEl jugador "+match.getLooser().getName()+" ha perdido.";
			match.enviarMensajeSalirPartida(mensaje, match.getWinner());
		}
		session.close();
		super.afterConnectionClosed(session, status);
		
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		System.out.println(message.getPayload());
		Object user = session.getAttributes().get("user");
		String speaker = ((User) user).getName();
		JSONObject jso = new JSONObject(message.getPayload());
		String type = jso.getString("type");
		if (type.equals("MENSAJE DE CHAT")) {
			//WrapperSession ws = Manager.get().findWrapperSession(session.getId());
			//Manager.get().add(ws, ws.getHttpSession().getId());
			//Collection<WrapperSession> wrappers = (Collection<WrapperSession>) Manager.get().getAjedrezSessionsPorWs().values();
			 //for (WrapperSession wrapper : wrappers) {
				matchId = jso.getString("matchId");
				//JSONArray user = jso.getJSONArray("users");
				Match match = Manager.get().findMatch(matchId);
				match.enviarMensaje(jso.getString("texto"), speaker);
			// }
		}
	}
	

	@Override
	protected void handleBinaryMessage(WebSocketSession session, BinaryMessage message) {
		session.setBinaryMessageSizeLimit(1000*1024*1024);
		
		byte[] payload = message.getPayload().array();
		System.out.println("La sesión " + session.getId() + " manda un binario de " + payload.length + " bytes");
	}
	
	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
		exception.printStackTrace();
	}
	
	private void send(WebSocketSession session, Object... typesAndValues) {
		JSONObject jso = new JSONObject();
		int i=0;
		while (i<typesAndValues.length) {
			jso.put(typesAndValues[i].toString(), typesAndValues[i+1]);
			i+=2;
		}
		WebSocketMessage<?> wsMessage=new TextMessage(jso.toString());
		try {
			session.sendMessage(wsMessage);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
