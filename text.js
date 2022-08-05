class Usuario{
    constructor (nombre, apellido, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = []
    }
    GetFullName(){
        console.log(this.nombre+" "+this.apellido)
    }
    getname(){
        console.log(this.nombre)
    }
    addLibro(nombre,autor){

    }
}
const nico = new Usuario('Nicolás', 'Herrera')
nico.GetFullName()
nico.getname()