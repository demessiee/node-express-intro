const starwars = require("../src/starwars.js")

test("getPeople", () => {
    return starwars.getPeople(1).then(data => {
        expect(data).toEqual({
            name: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            gender: 'male'
          });
    });

})

test("getFilm", () => {
    return starwars.getFilm(1).then(data => {
        expect(data).toEqual({"director": "George Lucas", "episode_id": 4, "producer": "Gary Kurtz, Rick McCallum", "release_date": "1977-05-25", "title": "A New Hope"});
    });

})

test("getAllFilmTitles", () => {

    return starwars.getAllFilmTitles().then(data => {
        expect(data).toEqual([
           "A New Hope",
           "The Empire Strikes Back",
           "Return of the Jedi",
           "The Phantom Menace",
           "Attack of the Clones",
           "Revenge of the Sith"
        ])
    })

})

test("getFilmCharacters", () => {
    return starwars.getFilmCharacters(1).then(data => {
        expect(data).toEqual([
            'Luke Skywalker',        'C-3PO',
            'R2-D2',                 'Darth Vader',
            'Leia Organa',           'Owen Lars',
            'Beru Whitesun lars',    'R5-D4',
            'Biggs Darklighter',     'Obi-Wan Kenobi',
            'Wilhuff Tarkin',        'Chewbacca',
            'Han Solo',              'Greedo',
            'Jabba Desilijic Tiure', 'Wedge Antilles',
            'Jek Tono Porkins',      'Raymus Antilles'
          ]);
    });

})