package edu.uclm.esi.tys2122.newGuessWho;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MvcResult;

import edu.uclm.esi.tys2122.MvcTestCase;

@SpringBootTest
@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)

public class GuessWhoMatchTest extends MvcTestCase {

	private JSONObject jsoPepe, jsoAna, jsoLucas;
	
	private HttpSession sessionPepe, sessionAna, sessionLucas;
	
	@BeforeEach
	public void setUp() {
		jsoPepe = new JSONObject();
		jsoPepe.put("userName", "pepe"); jsoPepe.put("email", "pepe@pepe.com"); 
		jsoPepe.put("pwd1", "pepe123"); jsoPepe.put("pwd2", "pepe123"); 
		
		jsoAna = new JSONObject();
		jsoAna.put("userName", "ana"); jsoAna.put("email", "ana@ana.com"); 
		jsoAna.put("pwd1", "ana123"); jsoAna.put("pwd2", "ana123");
		
		jsoLucas = new JSONObject();
		jsoLucas.put("userName", "lucas"); jsoLucas.put("email", "lucas@lucas.com"); 
		jsoLucas.put("pwd1", "lucas123"); jsoLucas.put("pwd2", "lucas123");
	}
	
	@Test
	public void test() throws Exception {
		doPut("/user/register", null, jsoPepe);
		doPut("/user/register", null, jsoAna);
		doPut("/user/register", null, jsoLucas);
		
		this.sessionPepe = doPost("/user/login", null, "name", "pepe", "pwd", "pepe123").
				andReturn().getRequest().getSession();
		this.sessionAna = doPost("/user/login", null, "name", "ana", "pwd", "ana123").
				andReturn().getRequest().getSession();
		this.sessionLucas = doPost("/user/login", null, "name", "lucas", "pwd", "lucas123").
				andReturn().getRequest().getSession();
		
		MvcResult result= doGet("/games/getGames", this.sessionPepe).
				andReturn();
		String response = result.getResponse().getContentAsString();
		JSONArray jsaGames = new JSONArray(response);
		assertTrue(jsaGames.length()==3);
		
		result = doGet("/games/joinGame/Quien Es Quien", this.sessionPepe).andReturn();
		response = result.getResponse().getContentAsString();
		JSONObject jsoPartidaPepe = new JSONObject(response);
		assertFalse(jsoPartidaPepe.getBoolean("ready"));
		
		
		result = doGet("games/joinGame/Quien Es Quien", this.sessionAna).andReturn();
		response = result.getResponse().getContentAsString();
		JSONObject jsoPartidaAna = new JSONObject(response);
		
		assertTrue(jsoPartidaPepe.getString("id").equals(jsoPartidaAna.getString("id")));
		assertFalse(jsoPartidaAna.getBoolean("ready"));
		
		System.out.println(jsoPartidaAna.toString());
		String matchId = jsoPartidaAna.getString("id");
		

		result = doPost("games/move", null, 
				"matchId", matchId).andReturn();
		
	
		}
	}
