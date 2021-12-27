class GuessWhoMatch extends Match {
	constructor(ko, response) {
		super(response);
		this.colocarPiezas(ko);
	}
	
	colocarPiezas(ko) {
		
		for (let i=0; i<3; i++) {
			for (let j=0; j<4; j++) {
				let square = this.board.squares[i][j];
				
				this.board.squares[i][j] = {
					valor : square,
					imagen : ko.observable(null),
					cambiarImagen: function(){
						let nombre = this.imagen()
						if(nombre.substring(nombre.length-7, nombre.length) == "OUT.png")
							nombre = nombre.substring(0, nombre.length-7) + ".png"
						else
							nombre = nombre.substring(0, nombre.length-4) + "OUT.png"
						this.imagen(nombre);
					}
				};
					
			switch (this.board.squares[i][j].valor) {
				case 1 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Arturo.png");
					break;
				case 2 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Celia.png");
					break;
				case 3 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Esther.png");
					break;
				case 4 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Hector.png");
					break;
				case 5 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Manuel.png");
					break;
				case 6 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Maria.png");
					break;
				case 7 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Pablo.png");
					break;
				case 8 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Raquel.png");
					break;
				case 9 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Ricardo.png");
					break;
				case 10 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Sara.png");
					break;
				case 11 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Simon.png");
					break;
				case 12 : 
					this.board.squares[i][j].imagen = ko.observable("css/images/Sofia.png");
					break;
				}
			}
		}
		let carta = ko.observable(null)
		let fila = this.random(0,2)
		let columna = this.random(0,3)
		this.carta = this.board.squares[fila][columna].imagen()
		
	}		
	
	random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
	}

}
