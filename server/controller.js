let guitars = require('./db.json')
let globalID = 4

module.exports = {
    getGuitars: (req, res) => {
        res.status(200).send(guitars)
    },
    deleteGuitar: (req, res) => {
        let index = guitars.findIndex(elem => elem.id === +req.params.id)
        guitars.splice(index, 1)
        res.status(200).send(guitars)
    },
    addGuitar: (req, res) => {
        const {name, price, imageURL} = req.body
        console.log(req.body)
        newGuitar = {
            id: globalID,
            name,
            price,
            imageURL
        }
        guitars.push(newGuitar)
        res.status(200).send(guitars)
        globalID++
    },
    updatePrice: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        let index = guitars.findIndex(elem => elem.id === +id)
        if(type === 'minus' && guitars[index].price > 0){
            guitars[index].price -= 50
            res.status(200).send(guitars)
        }else if(type === 'plus'){
            guitars[index].price += 50
            res.status(200).send(guitars)
        }else{
            res.status(400).send('Something went wrong...')
        }
    }
}
