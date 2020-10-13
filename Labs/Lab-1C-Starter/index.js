const axios = require('axios')


axios("https://swapi.dev/api/films/1/").then(res => {
    console.log(res.data)
})

axios("https://swapi.dev/api/people/1/").then(res => {
    console.log(res.data)
})

let films = [
    axios("https://swapi.dev/api/films/1/"),
    axios("https://swapi.dev/api/films/2/"),
    axios("https://swapi.dev/api/films/3/"),
    axios("https://swapi.dev/api/films/4/"),
    axios("https://swapi.dev/api/films/5/"),
    axios("https://swapi.dev/api/films/6/")
]


Promise.all(films).then( filmsArr => {
    return filmsArr.map(x => x.data)
}).then(filmDataArr => {
    console.log(filmDataArr)
})