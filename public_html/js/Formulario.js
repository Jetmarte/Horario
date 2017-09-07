var Formulario = (function () {
    function Formulario() {
    }
    Formulario.prototype.createSelect = function (nombreID, divID) {
        var indice = this.getSelectedIndex("nivelSemestre");
        var myDiv = document.getElementById(divID);
        //Create array of options to be added ***************
        var archivo = new Archivo();
        var util = new UtilCadena();
        var arrayMaterias = util.arrayUnicoMateria(util.arrayObjetos(archivo.leerArchivoTXT("horario.txt")));
        //crear una lista de seleccion ********************
        var selectList = document.createElement("select");
        selectList.id = nombreID;
        myDiv.appendChild(selectList);
        //Create and append the options ********************
        for (var i = 0; i < arrayMaterias.length; i++) {
            var option = document.createElement("option");
            var materia = arrayMaterias[i];
            //indice es el nivel elejido
            if (materia.getNivel() === indice) {
                option.value = materia.getCodigo() + "-" + materia.getGrupo();
                option.text = "Gr " + materia.getGrupo() + " - " + materia.getNombre();
                selectList.appendChild(option);
            }
        }
        selectList.selectedIndex = 0;
    };
    Formulario.prototype.getSelectedIndex = function (id) {
        var mySelect = (document.getElementById(id));
        var sel = mySelect.selectedIndex;
        var opt = mySelect.options[sel];
        var myValue = opt.value;
        //let CurText = opt.text;
        return myValue;
    };
    Formulario.prototype.getSelectedText = function (id) {
        var mySelect2 = (document.getElementById(id));
        var sel2 = mySelect2.selectedIndex;
        var opt2 = mySelect2.options[sel2];
        //let myValue: string = opt.value;
        var myText = opt2.text;
        return myText;
    };
    return Formulario;
}());
//# sourceMappingURL=Formulario.js.map