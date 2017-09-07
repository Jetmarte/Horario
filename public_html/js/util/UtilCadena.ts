/// <reference path="../clases/Materia.ts"/>

class UtilCadena{
    //objeto tipo materia que se insertara al array
    private materia: Materia;
    
    public arrayObjetos( miArray: string[] ): Array<Materia>{
        //declarar array de materias
        let lista: Array<Materia>= new Array();
        //counter of attributes
        let count: number = 0;
        //we creates a Materia object
        this.materia = new Materia();
        
        for ( let i = 0; i < miArray.length ; i++ ){
            //si el contador llega a 8 lo reiniciamos para 
            //llenar el siguiente objeto            
            if( count < 9 ){
                switch( count ){
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
                        this.materia.setNivel( miArray[i].replace(" ","") );
                        break;
                    }
                    default:{
                        //do nothing
                        break;
                    }
                }
                count=count + 1;
            }else{
                count = 0;
                i--;
                lista.push( this.materia );
                
                this.materia = new Materia();
            }//end if
        }//end for
        //retornamos el arrasy tipo <Materia>
        return lista;
    }
    
    //eliminar los objetos repetidos de un array de Materia
    public arrayUnicoMateria(miArray: Array<Materia>){
        let nuevoArray: Array<Materia> = new Array();
        let materia: Materia = new Materia();
        let grupo_: string = "";
        for (let i = 0; i < miArray.length ; i++){
            materia = miArray[i];
            
            if ( grupo_ !== materia.getGrupo() ){
                nuevoArray.push( materia );
                grupo_ = materia.getGrupo();
                
            }
        }
        return nuevoArray;
        
    }
    
}


