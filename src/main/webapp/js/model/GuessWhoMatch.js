class GuessWhoMatch extends Match {
	constructor(ko, response, $) {
		super(response);
		this.$ = $
		this.colocarPiezas(ko);
		this.cartaQueAdivino = ko.observable(null)
		this.cartasBien = ko.observableArray(
			["Arturo", "Celia", "Esther", "Hector", "Manuel", "Maria", "Pablo", "Raquel", "Ricardo", "Sara", "Simon", "Sofia"]
		)
		this.cartas = ko.observableArray(
			["css/images/Arturo.png", "css/images/Celia.png", "css/images/Esther.png", "css/images/Hector.png", "css/images/Manuel.png", "css/images/Maria.png", "css/images/Pablo.png", "css/images/Raquel.png", "css/images/Ricardo.png", "css/images/Sara.png", "css/images/Simon.png", "css/images/Sofia.png"]
		)

	}

	colocarPiezas(ko) {

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 4; j++) {
				let square = this.board.squares[i][j];

				this.board.squares[i][j] = {
					valor: square,
					imagen: ko.observable(null),
					cambiarImagen: function() {
						let nombre = this.imagen()
						if (nombre.substring(nombre.length - 7, nombre.length) == "OUT.png")
							nombre = nombre.substring(0, nombre.length - 7) + ".png"
						else
							nombre = nombre.substring(0, nombre.length - 4) + "OUT.png"
						this.imagen(nombre);
					}
				};

				switch (this.board.squares[i][j].valor) {
					case 1:
						this.board.squares[i][j].imagen = ko.observable("css/images/Arturo.png");
						break;
					case 2:
						this.board.squares[i][j].imagen = ko.observable("css/images/Celia.png");
						break;
					case 3:
						this.board.squares[i][j].imagen = ko.observable("css/images/Esther.png");
						break;
					case 4:
						this.board.squares[i][j].imagen = ko.observable("css/images/Hector.png");
						break;
					case 5:
						this.board.squares[i][j].imagen = ko.observable("css/images/Manuel.png");
						break;
					case 6:
						this.board.squares[i][j].imagen = ko.observable("css/images/Maria.png");
						break;
					case 7:
						this.board.squares[i][j].imagen = ko.observable("css/images/Pablo.png");
						break;
					case 8:
						this.board.squares[i][j].imagen = ko.observable("css/images/Raquel.png");
						break;
					case 9:
						this.board.squares[i][j].imagen = ko.observable("css/images/Ricardo.png");
						break;
					case 10:
						this.board.squares[i][j].imagen = ko.observable("css/images/Sara.png");
						break;
					case 11:
						this.board.squares[i][j].imagen = ko.observable("css/images/Simon.png");
						break;
					case 12:
						this.board.squares[i][j].imagen = ko.observable("css/images/Sofia.png");
						break;
				}
			}
		}
		let carta = ko.observable(null)
		let cartaSrc = ko.observable(null)
		let fila = this.random(0, 2)
		let columna = this.random(0, 3)
		this.carta = this.board.squares[fila][columna].imagen()
		this.cartaSrc = this.carta
		this.carta = this.carta.substring(11,this.carta.length-4)//css/images/sofia
		

	}

	random(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}

	enviarCarta() {
		let self = this;

		let info = {
			matchId : this.id,
			type : "carta",
			carta : this.carta
		}
		let data = {
			type : "post",
			url : "/games/move/",
			data : JSON.stringify(info),
			contentType : "application/json",
			success : function(response) {
				alert("Tienes 2 intentos para adivinar la carta")
			},
			error : function(response) {
				console.error(response.responseJSON.message);

			}
		};
		this.$.ajax(data);
	}
	

	
	adivinar() {
		let self = this;

		let info = {
			matchId : this.id,
			type : "cartaQueAdivino",
			carta : this.cartaQueAdivino() 
		}
		let data = {
			type : "post",
			url : "/games/move/",
			data : JSON.stringify(info),
			contentType : "application/json",
			success : function(response) {
				if(response.acierto == false)
					if(response.intentos == 1)
						alert("Has gastado 1 intento. Te quedan 1.")
					else
						alert("Te has quedado sin intentos, por lo que has perdido\nGANADOR: "+response.winner.name+"\nPERDEDOR: "+response.looser.name)
				else
					alert("GANADOR: "+response.winner.name+"\nPERDEDOR: "+response.looser.name);
				
			},
			error : function(response) {
				console.error(response.responseJSON.message);

			}
		};
		this.$.ajax(data);
	}
}
