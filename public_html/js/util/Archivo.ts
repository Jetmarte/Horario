
class Archivo{
    
    /**
     * Leer un archivo de texto 
     * retorna un array de tipo string
     */
    leerArchivoTXT( archivo: string ): string[]{
        //leemos el archivo de texto
        let allText:string;
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", archivo, false);
        rawFile.onreadystatechange = function(){
            if (rawFile.readyState === 4){
                if (rawFile.status == 200 || rawFile.status == 0){
                    allText = rawFile.responseText;
                    
                }
            }
        }
        rawFile.send(null);
        
        //separamos la cadena con * com osemarador y retorna
        //un array de strings
        return allText.split('*');
    }
    
    
}





