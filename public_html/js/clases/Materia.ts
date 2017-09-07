
class Materia{
    private codigo: string;
    private nombre: string;
    private grupo: string;
    private dia: string;
    private horaEntrada: string;
    private horaSalida: string;
    private aula: string;
    private docente: string;
    private nivel: string;
    
    constructor(){
        this.codigo      = "";
        this.nombre      = "";
        this.grupo       = "";
        this.dia         = "";
        this.horaEntrada = "";
        this.horaSalida  = "";
        this.aula        = "";
        this.docente     = "";
        this.nivel       = "";
    }
    
    //****************************************************
    public setCodigo(codigo_: string){
        this.codigo = codigo_;
    }
    
    public getCodigo(){
        return this.codigo;
    }
    //****************************************************
    public setNombre(nombre_: string){
        this.nombre = nombre_;
    }
    
    public getNombre(){
        return this.nombre;
    }
    //****************************************************
    public setGrupo(grupo_: string){
        this.grupo = grupo_;
    }
    
    public getGrupo(){
        return this.grupo;
    }
    //****************************************************
    public setDia(dia_: string){
        this.dia = dia_;
    }
    
    public getDia(){
        return this.dia;
    }
    //****************************************************
    public setHoraEntrada(horaEntrada_: string){
        this.horaEntrada = horaEntrada_;
    }
    
    public getHoraEntrada(){
        return this.horaEntrada;
    }
    //****************************************************
    
    public setHoraSalida(horaSalida_: string){
        this.horaSalida = horaSalida_;
    }
    
    public getHoraSalida(){
        return this.horaSalida;
    }
    //****************************************************
    public setAula(aula_: string){
        this.aula = aula_;
    }
    
    public getAula(){
        return this.aula;
    }
    //**********************************
    public setDocente(docente_: string){
        this.docente = docente_;
    }
    
    public getDocente(){
        return this.docente;
    }
    
    //**********************************
    public setNivel(nivel_: string){
        this.nivel = nivel_;
    }
    
    public getNivel (){
        return this.nivel;
    }
    
}






