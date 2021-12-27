define([ 'knockout', 'appController', 'ojs/ojmodule-element-utils', 'accUtils',
		'jquery' ], function(ko, app, moduleUtils, accUtils, $) {

	class MenuViewModel {
		constructor() {
			let self = this;

			self.games = ko.observableArray([]);
			self.matches = ko.observableArray([]);
			self.error = ko.observable(null);
			
			self.mensaje = ko.observable();

			self.x = ko.observable(null);
			self.y = ko.observable(null);
						
			// Header Config
			self.headerConfig = ko.observable({
				'view' : [],
				'viewModel' : null
			});
			moduleUtils.createView({
				'viewPath' : 'views/header.html'
			}).then(function(view) {
				self.headerConfig({
					'view' : view,
					'viewModel' : app.getHeaderModel()
				})
			});
		}

		mover(match) {
			let self = this;

			let info = {
				x : self.x(),
				y : self.y(),
				matchId : match.id
			}

			let data = {
				type : "post",
				url : "/games/move",
				contentType : 'application/json',
				data : JSON.stringify(info),
				success : function(response) {

				},
				error : function(response) {

				}
			}
			$.ajax(data);
		}

		connected() {
			accUtils.announce('Juegos.');
			document.title = "Juegos";

			let self = this;

			let data = {
				type : "get",
				url : "/games/getGames",
				success : function(response) {
					self.games(response);
				},
				error : function(response) {
					console.error(response.responseJSON.message);
					self.error(response.responseJSON.message);
				}
			}
			$.ajax(data);
		};
		
		conectarAWebSocket() {
			this.ws = new WebSocket("ws://localhost/wsGenerico");
			this.ws.onopen = function(event) {
				alert("Conexión establecida");
				console.log(event);
				document.getElementById("chatRoomField").disabled = false;
    			document.getElementById("sendField").disabled = false;
    			document.getElementById("sendButton").disabled = false;
			}
			this.ws.onmessage = function(event) {
				let msg = JSON.parse(event.data);
				console.log(event);
				alert("onmessage funciona");
				document.getElementById("chatRoomField").textContent = msg.data;


			}
		}
		
		enviarMensaje(partida) {
			let msg = {
				type : "MENSAJE DE CHAT",
				texto : this.mensaje(),
				matchId : partida.id
			}			
			this.ws.send(JSON.stringify(msg))
		}

		joinGame(game) {
			let self = this;

			let data = {
				type : "get",
				url : "/games/joinGame/" + game.name,
				success : function(response) {
					let match;
					if (response.game == "ChessMatch") {
						match = new ChessMatch(response);
						match.colocarPiezas();
					} else if (response.game == "TictactoeMatch") {
						match = new TictactoeMatch(response);
					} else if (response.game == "GuessWhoMatch") {
						match = new GuessWhoMatch(ko, response, $);
						match.enviarCarta($)
					}
					self.matches.push(match);
					console.log(JSON.stringify(response));
				},
				error : function(response) {
					console.error(response.responseJSON.message);
					self.error(response.responseJSON.message);
				}
			};
			$.ajax(data);
		}

		reload(match) {
			let self = this;

			let data = {
				type : "get",
				url : "/games/findMatch/" + match.id,
				success : function(response) {
					for (let i=0; i<self.matches().length; i++)
						if (self.matches()[i].id==match.id) 
							self.matches.splice(i, 1, response);
					console.log(JSON.stringify(response));
				},
				error : function(response) {
					console.error(response.responseJSON.message);
					self.error(response.responseJSON.message);
				}
			};
			$.ajax(data);
		}

		disconnected() {
			// Implement if needed
		};

		transitionCompleted() {
			// Implement if needed
		};
	}

	return MenuViewModel;
});
