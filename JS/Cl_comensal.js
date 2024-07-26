export default class Cl_comensal {
    constructor(n, tC, c, llJ) {
        this.nombre = n;
        this.tipoComida = tC;
        this.cantidad = +c;
        this.llevaJugo = +llJ;
    }

    set nombre(n) {
        this._nombre = n;
    }

    set tipoComida(tC) {
        this._tipoComida = tC;
    }

    set cantidad(c) {
        this._cantidad = +c;
    }

    set llevaJugo(llJ) {
        this._llevaJugo = +llJ;
    }

    get nombre() {
        return this._nombre;
    }

    get tipoComida() {
        return this._tipoComida;
    }

    get cantidad() {
        return this._cantidad;
    }

    get llevaJugo() {
        return this._llevaJugo;
    }

    montoPago() {
        if (this.tipoComida === "Empanada")
            return this.cantidad * 20;
        else if (this.tipoComida === "Pastelito")
            return this.cantidad * 10;
        else
            return 0;
    }

    montoFinal() {
        if (this.llevaJugo === 1)
            return this.montoPago() + 5;
        else
            return this.montoPago();
    }
}