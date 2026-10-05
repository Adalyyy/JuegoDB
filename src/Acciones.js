import Personaje from "./Personaje.js";
// Accionnes es una clase heredadas de Personaje
//un objeto de Accionnes tendrá acceso a los métodos públicos que herede de personajes  
class  Acciones extends Personaje{
    constructor(nombre, personaje){
        //super() llama al constructor de la clase padre, es deci
        super(nombre, personaje);
    }
    
    atkBasico(){
        this.setEnergia(parseInt(this.getEnergia() - 5));
        this.setKi(parseInt(this.getKi() - 10));
        this.mostrarEstadisticas();
    }
    atkEspecial(){
        this.setEnergia(parseInt(this.getEnergia() - 15));
        this.setKi(parseInt(this.getKi() - 20));
        this.mostrarEstadisticas();
    }
    curacion(){
        this.setEnergia(100);
        this.setKi(100);
        this.setVida(100);
        this.setSemilla(this.getSemilla() - 1);
    }
    cargaEnergia(){
        this.setEnergia((this.getEnergia() + 15) > 100 ? 100 : (this.getEnergia() + 15));
        this.setKi((this.getKi() + 10) > 100 ? 100 : (this.getKi() + 10));
        this.mostrarEstadisticas();
    }
    defensa(){

    }
}

export default Acciones;