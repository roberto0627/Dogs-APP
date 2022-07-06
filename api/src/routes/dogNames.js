const axios = require("axios").default;
const { Dog } = require('../db');


const dogNames = function (req, res) {
    const names = [];
    Dog.findAll({ attributes: ["nombre"] }).then(resultado => {
        resultado.forEach(e => {
            names.push(e.nombre)
        })
        axios('https://api.thedogapi.com/v1/breeds').then(resul => {
            resul.data.forEach(i => {
                names.push(i.name)
            })
            return res.json(names)
        })

    })
        .catch(error => res.status(500).json(error))
}
module.exports = dogNames