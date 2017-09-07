var Materia = (function () {
    function Materia() {
        this.codigo = "";
        this.nombre = "";
        this.grupo = "";
        this.dia = "";
        this.horaEntrada = "";
        this.horaSalida = "";
        this.aula = "";
        this.docente = "";
        this.nivel = "";
    }
    //****************************************************
    Materia.prototype.setCodigo = function (codigo_) {
        this.codigo = codigo_;
    };
    Materia.prototype.getCodigo = function () {
        return this.codigo;
    };
    //****************************************************
    Materia.prototype.setNombre = function (nombre_) {
        this.nombre = nombre_;
    };
    Materia.prototype.getNombre = function () {
        return this.nombre;
    };
    //****************************************************
    Materia.prototype.setGrupo = function (grupo_) {
        this.grupo = grupo_;
    };
    Materia.prototype.getGrupo = function () {
        return this.grupo;
    };
    //****************************************************
    Materia.prototype.setDia = function (dia_) {
        this.dia = dia_;
    };
    Materia.prototype.getDia = function () {
        return this.dia;
    };
    //****************************************************
    Materia.prototype.setHoraEntrada = function (horaEntrada_) {
        this.horaEntrada = horaEntrada_;
    };
    Materia.prototype.getHoraEntrada = function () {
        return this.horaEntrada;
    };
    //****************************************************
    Materia.prototype.setHoraSalida = function (horaSalida_) {
        this.horaSalida = horaSalida_;
    };
    Materia.prototype.getHoraSalida = function () {
        return this.horaSalida;
    };
    //****************************************************
    Materia.prototype.setAula = function (aula_) {
        this.aula = aula_;
    };
    Materia.prototype.getAula = function () {
        return this.aula;
    };
    //**********************************
    Materia.prototype.setDocente = function (docente_) {
        this.docente = docente_;
    };
    Materia.prototype.getDocente = function () {
        return this.docente;
    };
    //**********************************
    Materia.prototype.setNivel = function (nivel_) {
        this.nivel = nivel_;
    };
    Materia.prototype.getNivel = function () {
        return this.nivel;
    };
    return Materia;
}());
//# sourceMappingURL=Materia.js.map