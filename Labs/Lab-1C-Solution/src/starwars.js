const axios = require('axios')


/* Function: getPeople
    Input: id(integer)
    Output: getPeople makes a request to https://swapi.dev/api/people/:id/ and 
    returns a Promise that contains an object including the name, height, mass, hair_color, skin_color and gender 
    of the person that is requested. Note: only ids 1-84 are valid.
/****/
function getPeople(id){
    return axios(`https://swapi.dev/api/people/${id}`)
    .then( x => x.data)
    .then( x => {
        return {
            name:x.height,
            mass:x.mass,
            hair_color:x.hair_color,
            skin_color:x.skin_color,
            gender:x.gender
        }
    })
}

/* Function: getFilm
    Input: id(integer)
    Output: getFilms makes a request to https://swapi.dev/api/films/:id/ and 
    returns a Promise that contains an object including the title, episode_id, director, producer, and release_date
    of the film that is requested. Note: only ids 1-6 are valid.
/****/
function getFilm(id){
    return axios(`https://swapi.dev/api/films/${id}`)
    .then( x => x.data)
    .then( x => {
        return {
            title:x.title,
            episode_id:x.episode_id,
            director:x.director,
            producer:x.producer,
            release_date:x.release_date
        }
    })
}


/* Function: getAllFilmTitles
    Input: none
    Output: getAllFilmTitles makes a request to various Star Wars API endpoints and 
    returns a Promise that contains an array of all film titles in order(film ids 1-6)
/****/
function getAllFilmTitles(){
    let promises = [
        axios(`https://swapi.dev/api/films/1`).then( x => x.data),
        axios(`https://swapi.dev/api/films/2`).then( x => x.data),
        axios(`https://swapi.dev/api/films/3`).then( x => x.data),
        axios(`https://swapi.dev/api/films/4`).then( x => x.data),
        axios(`https://swapi.dev/api/films/5`).then( x => x.data),
        axios(`https://swapi.dev/api/films/6`).then( x => x.data),
    ]
    return Promise.all(promises).then( arr => {
        return arr.map( x => x.title)
    })
}

/* Function: getFilmCharacters
    Input: id(number)
    Output: getFilmCharacters makes a request to various Star Wars API endpoints and returns
     a Promise containing an Array of all the character names that appear in a particular film id
/****/
function getFilmCharacters(id){
    return axios(`https://swapi.dev/api/films/${id}`)
    .then( x => x.data)
    .then( data => data.characters)
    .then( charEndpoints => charEndpoints.map(endpoint => axios(endpoint)))
    .then( promises => Promise.all(promises))
    .then ( arr => arr.map( char => char.data.name))
}

module.exports = {
    getPeople,
    getFilm,
    getAllFilmTitles,
    getFilmCharacters
}