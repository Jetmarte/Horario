
class Formulario{
    
    public createSelect(nombreID: string, divID: string) {
        
        let indice = this.getSelectedIndex("nivelSemestre");
        
        let myDiv = document.getElementById(divID);

        //Create array of options to be added ***************
        let archivo = new Archivo();
        let util = new UtilCadena();
        let arrayMaterias = util.arrayUnicoMateria( 
            util.arrayObjetos( archivo.leerArchivoTXT("horario.txt") ) );
        
        //crear una lista de seleccion ********************
        var selectList = document.createElement("select");
        selectList.id = nombreID;
        myDiv.appendChild(selectList);
        
        //Create and append the options ********************
        for (var i = 0; i < arrayMaterias.length; i++) {
            var option = document.createElement("option");
            let materia: Materia = arrayMaterias[i];
            //indice es el nivel elejido
            if ( materia.getNivel() === indice ){
                option.value = materia.getCodigo() + "-" + materia.getGrupo();
                option.text = "Gr " + materia.getGrupo()+ " - " + materia.getNombre();
                selectList.appendChild(option);
            }
        }
        
        selectList.selectedIndex = 0;
    }
    
    public getSelectedIndex(id: string):string{
        let mySelect = (document.getElementById(id)) as HTMLSelectElement;
        let sel = mySelect.selectedIndex;
        let opt = mySelect.options[sel];
        let myValue: string = opt.value;
        //let CurText = opt.text;
        return myValue;
    }
    
    public getSelectedText(id: string):string{
        let mySelect2 = (document.getElementById(id)) as HTMLSelectElement;
        let sel2 = mySelect2.selectedIndex;
        let opt2 = mySelect2.options[sel2];
        //let myValue: string = opt.value;
        let myText = opt2.text;
        return myText;
    }
    
    
}





