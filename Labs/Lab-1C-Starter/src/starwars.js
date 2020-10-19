const axios = require('axios')


/* Function: getPeople
    Input: id(integer)
    Output: getPeople makes a request to https://swapi.dev/api/people/:id/ and 
    returns a Promise that contains an object including the name, height, mass, hair_color, skin_color and gender 
    of the person that is requested. Note: only ids 1-84 are valid.
/****/
async function getPeople(id){
    let res = await axios("https://swapi.dev/api/people/" + id)
    return {
        name:res.data.name,
        height:res.data.height,
        mass:res.data.mass,
        hair_color:res.data.hair_color,
        skin_color:res.data.skin_color,
        gender:res.data.gender
    }
   
}

/* Function: getFilm
    Input: id(integer)
    Output: getFilms makes a request to https://swapi.dev/api/films/:id/ and 
    returns a Promise that contains an object including the title, episode_id, director, producer, and release_date
    of the film that is requested. Note: only ids 1-6 are valid.
/****/
function getFilm(id){
  
}


/* Function: getAllFilmTitles
    Input: none
    Output: getAllFilmTitles makes a request to various Star Wars API endpoints and 
    returns a Promise that contains an array of all film titles in order(film ids 1-6)
/****/
function getAllFilmTitles(){
  
}

/* Function: getFilmCharacters
    Input: id(number)
    Output: getFilmCharacters makes a request to various Star Wars API endpoints and returns
     a Promise containing an Array of all the character names that appear in a particular film id
/****/
function getFilmCharacters(id){
    
}


module.exports = {
    getPeople,
    getFilm,
    getAllFilmTitles,
    getFilmCharacters
}