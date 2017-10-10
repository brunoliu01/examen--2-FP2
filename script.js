class venta {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    ganancia() {
        return 10*(this.price*this.quantity)/100
    }
}
class Lista {
    constructor() {
        this.lista = new Array();
    }
    addToList(item) {
        this.lista.push(item);
    }
    getData() {
        let money = 0;
        let total = this.lista.length;
        for (let item of this.lista) {
            money += item.price;
        }
        console.log(`La cantidad total de productos vendidos ${total}`);
        console.log(`La cantidad total de dinero ingresado a la caja es ${money}`);
    }
}
const item1 = new venta('banana', 10, 10);
const array = new Lista();
array.addToList(item1);
array.getData();
console.log(`La ganancia es: ${item1.ganancia()}`);