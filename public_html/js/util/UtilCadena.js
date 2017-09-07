/// <reference path="../clases/Materia.ts"/>
var UtilCadena = (function () {
    function UtilCadena() {
    }
    UtilCadena.prototype.arrayObjetos = function (miArray) {
        //declarar array de materias
        var lista = new Array();
        //counter of attributes
        var count = 0;
        //we creates a Materia object
        this.materia = new Materia();
        for (var i = 0; i < miArray.length; i++) {
            //si el contador llega a 8 lo reiniciamos para 
            //llenar el siguiente objeto            
            if (count < 9) {
                switch (count) {
                    case 0: {
                        this.materia.setCodigo(miArray[i]);
                        break;
                    }
                    case 1: {
                        this.materia.setNombre(miArray[i]);
                        break;
                    }
                    case 2: {
                        this.materia.setGrupo(miArray[i]);
                        break;
                    }
                    case 3: {
                        this.materia.setDia(miArray[i]);
                        break;
                    }
                    case 4: {
                        this.materia.setHoraEntrada(miArray[i]);
                        break;
                    }
                    case 5: {
                        this.materia.setHoraSalida(miArray[i]);
                        break;
                    }
                    case 6: {
                        this.materia.setAula(miArray[i]);
                        break;
                    }
                    case 7: {
                        this.materia.setDocente(miArray[i]);
                        break;
                    }
                    case 8: {
                        this.materia.setNivel(miArray[i].replace(" ", ""));
                        break;
                    }
                    default: {
                        //do nothing
                        break;
                    }
                }
                count = count + 1;
            }
            else {
                count = 0;
                i--;
                lista.push(this.materia);
                this.materia = new Materia();
            } //end if
        } //end for
        //retornamos el arrasy tipo <Materia>
        return lista;
    };
    //eliminar los objetos repetidos de un array de Materia
    UtilCadena.prototype.arrayUnicoMateria = function (miArray) {
        var nuevoArray = new Array();
        var materia = new Materia();
        var grupo_ = "";
        for (var i = 0; i < miArray.length; i++) {
            materia = miArray[i];
            if (grupo_ !== materia.getGrupo()) {
                nuevoArray.push(materia);
                grupo_ = materia.getGrupo();
            }
        }
        return nuevoArray;
    };
    return UtilCadena;
}());
//# sourceMappingURL=UtilCadena.js.map