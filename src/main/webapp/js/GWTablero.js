class GWTablero {
	constructor(ko) {
		let filas = new Array();
		for (let i=0; i<3; i++) {
			filas[i] = new Array();
			for (let j=0; j<4; j++)
				filas[i][j] = new Casilla(ko, null);
		}

		filas[0][0] = new Arturo("ARTURO")
		filas[0][1] = new Celia("CELIA")
		filas[0][2] = new Esther("ESTHER")
		filas[0][3] = new Hector("HECTOR")
		filas[1][0] = new Manuel("MANUEL")
		filas[1][1] = new Maria("MARIA")
		filas[1][2] = new Pablo("PABLO")
		filas[1][3] = new Raquel("RAQUEL")

		filas[2][0] = new Ricardo("RICARDO")
		filas[2][1] = new Sara("SARA")
		filas[2][2] = new Simon("SIMON")
		filas[2][3] = new Sofia("SOFIA")
		

		this.casillas = ko.observableArray(filas); 
	}

	print() {
		let r = "";
		for (let i=0; i<3; i++) {
			for (let j=0; j<4; j++) {
				r = r + this.casillas()[i][j].letra();
			}
			r= r + "\n";
		}
		return r;
	}
}

class Casilla {
	constructor(ko) {
		this.persona = ko.observable(null);
	}

	letra() {
		if (this.persona()!=null)
			return this.persona().letra();
		return " ";
	}
}

class Persona {
	constructor(nombre) {
		this.nombre = nombre;
	}
}

class Arturo extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "ARTURO")
			return "A";
		else if (this.nombre == "ARTUROOUT")
			return "a";
	}
}
class Celia extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "CELIA")
			return "C";
		else if (this.nombre == "CELIAOUT")
			return "c";
	}
}
class Esther extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "ESTHER")
			return "E";
		else if (this.nombre == "ESTHEROUT")
			return "e";
	}
}
class Hector extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "HECTOR")
			return "H";
		else if (this.nombre == "HECTOROUT")
			return "h";
	}
}
class Manuel extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "MANUEL")
			return "M";
		else if (this.nombre == "MANUELOUT")
			return "m";
	}
}
class Maria extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "MARIA")
			return "MAR";
		else if (this.nombre == "MARIAOUT")
			return "mar";
	}
}
class Pablo extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "PABLO")
			return "P";
		else if (this.nombre == "PABLOOUT")
			return "p";
	}
}
class Raquel extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "RAQUEL")
			return "R";
		else if (this.nombre == "RAQUELOUT")
			return "r";
	}
}
class Ricardo extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "RICARDO")
			return "RI";
		else if (this.nombre == "RICARDOOUT")
			return "ri";
	}
}
class Sara extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "SARA")
			return "S";
		else if (this.nombre == "SARAOUT")
			return "s";
	}
}
class Simon extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "SIMON")
			return "SI";
		else if (this.nombre == "SIMONOUT")
			return "si";
	}
}
class Sofia extends Persona {
	constructor(nombre) {
		super(nombre);
	}

	letra() {
		if (this.nombre == "SOFIA")
			return "SO";
		else if (this.nombre == "SOFIAOUT")
			return "so";
	}
}