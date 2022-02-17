class Jugador {
    constructor(nombre, camiseta, edad, lesionado) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}
const jugadores = [];
jugadores.push(new Jugador("Cris", 15 , 31, false));
jugadores.push(new Jugador("Facu", 2 , 22, false));
jugadores.push(new Jugador("Mari", 68 , 22, true));
jugadores.push(new Jugador("Charly", 0 , 23, false));
jugadores.push(new Jugador("Ailu", 98 , 24, false));
jugadores.push(new Jugador("Cin", 98 , 48, false));
console.log(jugadores);
