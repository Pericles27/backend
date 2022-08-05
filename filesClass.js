const { promises: fs } = require("fs")

class Contenedor{
    constructor(ruta){
        this.ruta= ruta;
    }
    async save(data){
        const objetos= await this.getAll()
        let newId

        if (objetos.length == 0 ){
            newId = 1
        }else{
            const ultimoId= parseInt(objetos[objetos.length - 1].id);
            newId = ultimoId + 1;
        }

        objetos.push({...data,id: newId})

        try{
            await fs.writeFile(this.ruta,JSON.stringify(objetos,null,2))
            return newId
        } catch (error){
            throw new Error(`}Error al guardar: ${error}`)
        }
        return id
    }
    async GetById(id){
        const objetos= await this.getAll()

        const nuevoObjeto= objetos.filter(elemento=> elemento.id !== id)

        if (nuevoObjeto.length === objetos.length){
            throw new Error(`}Error al encontrar el id: ${id}`)
        }

        try{
            return JSON.parse(objetos.id)
        } catch (error){
            return []
        }
    }
    async getAll(){
        try{
            const objetos= await fs.readFile(this.ruta,'utf-8')
            return JSON.parse(objetos)
        } catch (error){
            return []
        }
    }
    async DeleteById(id){
        const objetos= await this.getAll()

        const nuevoObjeto= objetos.filter(elemento=> elemento.id !== id)

        if (nuevoObjeto.length === objetos.length){
            throw new Error(`}Error al encontrar el id: ${id}`)
        }

        try{
            await fs.writeFile(this.ruta,JSON.stringify(nuevoObjeto,null,2))
        } catch (error){
            return []
        }
    }
    async DeleteAll(){

    }
}
const nuevoContenedor = new Contenedor("./productos.txt")

nuevoContenedor.save({title:'calculadora',price:202,url:"url"})
nuevoContenedor.DeleteById(4)
nuevoContenedor.GetById(5)


/*data={
    title="calculadora",
    price=202,
    thumbnail="url",
}*/