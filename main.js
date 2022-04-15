const allGuitars = document.querySelector('#allGuitars')
const form = document.querySelector('form')

const baseURL = 'http://localhost:4000/api/guitars'

const guitarCallback = ({ data: guitars }) => displayGuitars(guitars)
const errCallback = err => console.log(err.res.data)

const getAllGuitars = () => axios.get(baseURL).then(guitarCallback).catch(errCallback)
const addGuitar = body => axios.post(baseURL, body).then(guitarCallback).catch(errCallback)
const deleteGuitar = id => axios.delete(`${baseURL}/${id}`).then(guitarCallback).catch(errCallback)
const updatePrice = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(guitarCallback).catch(errCallback)

const submitHandler = (e) => {
    e.preventDefault()

    let title = document.querySelector('#title')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        price: price.value,
        imageURL: imageURL.value
    }

    addGuitar(bodyObj)

    title.value = ''
    price.value = ''
    imageURL.value = ''
}

const createGuitarCard = (guitar) => {
    const guitarCard = document.createElement('div')
    guitarCard.classList.add('guitarCard')

    guitarCard.innerHTML = `<img alt='guitar cover image' src=${guitar.imageURL} class="guitarImage"/>
    <p class="guitarName">${guitar.name}</p>
    <div class="btnsContainer">
        <button onclick="updatePrice(${guitar.id}, 'minus')">-</button>
        <p class="guitarPrice">$${guitar.price}</p>
        <button onclick="updatePrice(${guitar.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteGuitar(${guitar.id})">delete</button>`

    allGuitars.appendChild(guitarCard)
}

const displayGuitars = (arr) => {
    allGuitars.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGuitarCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllGuitars()
console.log('test')