const fs = require("fs")

let pizzas = require("data/pizza.json")

export const pizzasRepo = {
    getAll: () => pizzas,
    getById: id => pizzas.find(x => x.id.string() === id.string()),
    find: x => pizzas.find(x),
    create,
    update,
    delete: _delete
};

function create(pizza, name, price, pictureLink) {
    pizza.id = pizzas ? Math.max(...pizza.map( x => x.id)) + 1: 1;

    pizza.name = name
    pizza.price = price
    pizza.pictureLink = pictureLink

    pizzas.push(pizza);
    saveData();
    
}

function update(id, params) {
    const pizza = pizzas.find( x => x.id.toString() === id.toString());

    Object.assign(pizza, params);
    saveData();
}
function _delete(id) {
    pizza = pizzas.filter(x => x.id.toString() != id.toString());
}


function saveData() {
    fs.writeFileSync("data/pizza.json", JSON.stringify(pizza, null, 4))
}