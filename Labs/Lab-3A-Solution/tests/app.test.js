const util  = require('../src/util.js')
const starwars  = require('../src/starwars.js')

describe("sumNegative", () => {
    test("sumNegative", () => {
        expect(util.sumNegative([1,2,3,-4,6,-8,0])).toEqual(-12)
    })
})

describe("filterNulls", () => {
    test("filterNulls", () => {
        expect(util.filterNulls([1,3,'a','string',null,'five',null])).toEqual([1,3,'a','string','five'])
    })
})

describe("capitalizeFirst", () => {
    test("capitalizeFirst", () => {
        expect(util.capitalizeFirst(["hello","world","a","Cap"])).toEqual(["Hello","World","A","Cap"])
    })
})

describe("removeIndex", () => {
    test("removeIndex", () => {
        expect(util.removeIndex([1,2,3,4,5],3)).toEqual([1,2,3,5])

    })

})

describe("insertVal", () => {
    test("insertVal", () => {
        expect(util.insertVal([1,2,4,5],2,3)).toEqual([1,2,3,4,5])
    })
})

describe("sortLength", () => {
    test("sortLength", () => {
        expect(util.sortLength(["bbbb","aaaaaaa","a","","cccc","aaaa"])).toEqual(["aaaaaaa","aaaa","bbbb","cccc","a",""])
    })
})

describe("describeObject", () => {
    test("describeObject", () => {
        expect(util.describeObject({name:"bob",age:42})).toEqual("This object has 2 properties")
    })
})

describe("mergeObject", () => {
    test("mergeObject", () => {
        expect(util.mergeObject({name:"bob",age:42},{name:"sally",location:"NYC"})).toEqual({name:"sally",age:42,location:"NYC"})
    })
})

describe("objectValues", () => {
    test("objectValues", () => {
        expect(util.objectValues({a:"abcdefgh",age:"a",name:"aaa",location:"a1b2"})).toEqual(["a","aaa"])

    })
})

describe("getTall", () => {
    test("getTall", () => {
        let people = [
            {name:"bob",age:42,height:6.2},
            {name:"sally",age:30,height:5.5},
            {name:"fred",age:17,height:6.6},
            {name:"jill",age:16,height:5.8},

        ]
        expect(util.getTall(people)).toEqual([{name:"fred",age:17,height:6.6}])
    })
})


describe("getPeople", () => {
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
})
    

describe("getFilm", () => {
    
    test("getFilm", () => {
        return starwars.getFilm(1).then(data => {
            expect(data).toEqual({"director": "George Lucas", "episode_id": 4, "producer": "Gary Kurtz, Rick McCallum", "release_date": "1977-05-25", "title": "A New Hope"});
        });

    })

})
    

describe("getAllFilmTitles", () => {
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
     
})
    

describe("getFilmCharacters", () => {
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
})
    

    

    
    

    

    

    
