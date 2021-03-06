package edu.uclm.esi.tys2122.http;

import java.security.SecureRandom;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.esi.tys2122.dao.UserRepository;
import edu.uclm.esi.tys2122.model.Game;
import edu.uclm.esi.tys2122.model.Match;
import edu.uclm.esi.tys2122.model.User;
import edu.uclm.esi.tys2122.services.GamesService;
import edu.uclm.esi.tys2122.services.UserService;

@RestController
@RequestMapping("games")
public class GamesController extends CookiesController {
	@Autowired
	private GamesService gamesService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/getGames")
	public List<Game> getGames(HttpSession session) throws Exception {
		//User user = new User();
		//user.setName("anonimo" + session.getId());
		//session.setAttribute("userId", user.getId());
		Manager.get().add(session);
		return gamesService.getGames();
	}

	@GetMapping("/joinGame/{gameName}")
	public Match joinGame(HttpSession session, @PathVariable String gameName)  {
		User user;
		if (session.getAttribute("user")!=null) {
			 user = (User) session.getAttribute("user");
			user = this.userService.findUser(user.getId());
		} else {
			user = new User();
			user.setName("anonimo" + new SecureRandom().nextInt(1000));
			user.setEmail(user.getName() + "@" + user.getName() + ".com");
			user.setPwd("1234");
			session.setAttribute("user", user);
			userRepo.save(user);
		}

		Game game = Manager.get().findGame(gameName);
		if (game==null)
			new ResponseStatusException(HttpStatus.BAD_REQUEST, "No se encuentra el juego " + gameName);
			//throw new ResponseStatusException("No se encuentra el juego " + gameName);
		
		Match match = getMatch(game);
		match.addPlayer(user);
		if (match.isReady()) {
			game.getPendingMatches().remove(match);
			game.getPlayingMatches().add(match);
		}
		Manager.get().add(match);
		gamesService.put(match);
		return match;
	}
	
	@PostMapping("/move")
	public Match move(HttpSession session, @RequestBody Map<String, Object> movement) {
		User user = (User) session.getAttribute("user");
		JSONObject jso = new JSONObject(movement);
		Match match = gamesService.getMatch(jso.getString("matchId"));
		try {
			match.move(user.getId(), jso);
			if(match.getWinner()!=null) {
				gamesService.put(match);
			}
			return match;
		} catch (Exception e) {
 			throw new ResponseStatusException(HttpStatus.FORBIDDEN, e.getMessage());
		}
	}
	
	@GetMapping("/findMatch/{matchId}")
	public Match findMatch(@PathVariable String matchId) {
		return gamesService.getMatch(matchId);
	}

	private Match getMatch(Game game) {
		Match match;
		if (game.getPendingMatches().isEmpty()) {
			match = game.newMatch();
			game.getPendingMatches().add(match);
		} else {
			match = game.getPendingMatches().get(0);
		}
		return match;
	}
}
