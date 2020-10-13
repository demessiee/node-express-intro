const axios = require('axios')

let films = [
    axios("https://swapi.dev/api/films/1/"),
    axios("https://swapi.dev/api/films/2/"),
    axios("https://swapi.dev/api/films/3/"),
    axios("https://swapi.dev/api/films/4/"),
    axios("https://swapi.dev/api/films/5/"),
    axios("https://swapi.dev/api/films/6/")
]


Promise.all(films).then( filmsArr => {
    //console.log(filmsArr[0].data.title)

    let titles = filmsArr.map( x => {
        return {
            title:x.data.title,
            characters:Promise.all(x.data.characters.map(x => axios(x)))
         }
        })

    titles.forEach( async (x,i) => {

        let characters = await x.characters
        console.log(x.title)
        console.log()

        let names = characters.map(x => x.data.name)
        names.forEach( x => {
            console.log(x)
        })
        console.log()



    })
    

})