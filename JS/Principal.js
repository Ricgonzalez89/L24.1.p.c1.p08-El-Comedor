/* 24.EL COMEDOR
|* Se tienen cierta cantidad suficiente de empanadas (Bs.20 c/u), pastelitos (Bs.10 c/u) y jugo
|* (Bs.5 c/u). Los comensales piden sólo un tipo de comida, su cantidad y si quieren o no jugo. Se
|* desea conocer cuánto pagará el comensal. También se quiere saber cuánto queda de cada
|* comida al final y cuánto dinero recibió el cafetín.
|* Si el cafetín tiene 20 empanadas, 15 pastelitos y 10 jugos, y Elvis compra 3 pastelitos, Joao 2
|* empanadas con jugo, Melisa 5 empanadas, María 2 pastelitos con jugo y Rosa 10 empanadas, la
|* salida sería como sigue:
|* Elvis paga Bs.30
|* Joao paga Bs.45
|* Melisa paga Bs.100
|* María paga Bs.25
|* Rosa paga Bs.200
|* Quedan 3 empanadas
|* Quedan 8 pastelitos
|* Quedan 8 jugos
*/
import Cl_comensal from "./Cl_comensal.js";
import Cl_comedor from "./Cl_comedor.js";

let c1 = new Cl_comensal("Elvis", "Pastelito", 3, 0);
let c2 = new Cl_comensal("Joao", "Empanada", 2, 1);
let c3 = new Cl_comensal("Melisa", "Empanada", 5, 0);
let c4 = new Cl_comensal("María", "Pastelito", 2, 1);
let c5 = new Cl_comensal("Rosa", "Empanada", 10, 0);
let cafetin = new Cl_comedor(20, 15, 10);

cafetin.procesarComensal(c1);
cafetin.procesarComensal(c2);
cafetin.procesarComensal(c3);
cafetin.procesarComensal(c4);
cafetin.procesarComensal(c5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>${c1.nombre} paga Bs.${c1.montoFinal()}
<br>${c2.nombre} paga Bs.${c2.montoFinal()}
<br>${c3.nombre} paga Bs.${c3.montoFinal()}
<br>${c4.nombre} paga Bs.${c4.montoFinal()}
<br>${c5.nombre} paga Bs.${c5.montoFinal()}
<br>
<br>Quedan ${cafetin.devolverEmpanada()} empanadas.
<br>Quedan ${cafetin.devolverPastelito()} pastelitos.
<br>Quedan ${cafetin.devolverJugo()} jugos.
`;