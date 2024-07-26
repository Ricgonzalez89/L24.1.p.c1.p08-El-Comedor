export default class Cl_comedor {
    constructor(cE, cP, cJ) {
        this.cantEmpanada = +cE;
        this.cantPastelito = +cP;
        this.cantJugo = +cJ;
        this.acumMontoCobro = 0;
    }

    set cantEmpanada(cE) {
        this._cantEmpanada = +cE;
    }

    set cantPastelito(cP) {
        this._cantPastelito = +cP;
    }

    set cantJugo(cJ) {
        this._cantJugo = +cJ;
    }

    get cantEmpanada() {
        return this._cantEmpanada;
    }

    get cantPastelito() {
        return this._cantPastelito;
    }

    get cantJugo() {
        return this._cantJugo;
    }

    procesarComensal(c) {
        if (c.tipoComida === "Empanada")
            this.cantEmpanada -= c.cantidad;
        else if (c.tipoComida === "Pastelito") {
            this.cantPastelito -= c.cantidad;
        }

        if (c.llevaJugo === 1) {
            this.cantJugo--;
        }

        this.acumMontoCobro += c.montoFinal();
    }

    devolverEmpanada() {
        return this.cantEmpanada;
    }

    devolverPastelito() {
        return this.cantPastelito;
    }

    devolverJugo() {
        return this.cantJugo;
    }

    devolverMontoCobro() {
        return this.acumMontoCobro;
    }
}