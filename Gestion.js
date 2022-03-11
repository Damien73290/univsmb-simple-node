const fs =require("fs")
class GestionFichier {
    constructor(fichier){
    this.fichier=fichier
    }
    read() {
        this.contenu = fs.readFileSync(this.fichier, {encoding:'utf8', flag:'r'})

    }

    write(contenu){
        fs.writeFileSync(this.fichier, '\n' + contenu, {encoding:'utf-8', flag:'a+'})

    }
    delete(){
        fs.rmSync(this.fichier)

    }
    affichage(){
        console.log('Le contenu : \n'+ this.contenu)
    }

}
class GestionFichierJson extends GestionFichier{
    readjs(){
        var cont = fs.readFileSync(this.fichier, {encoding:'utf8', flag:'r'})
        var modjson = JSON.parse(cont)
        console.log( modjson)
        

        
    }

}
let monfichier = new GestionFichier('salut.txt')
let monfichierjs= new GestionFichierJson('test1.json')
//monfichier.write('comment ca va')
//monfichier.read()
//monfichier.affichage()
monfichierjs.readjs()

//monfichier.delete()



