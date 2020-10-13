
/* Function: sumNegative
    Input: arr(array[Numbers])
    Output: Returns the sum of all negative numbers in the array
/****/

function sumNegative(arr){
    let negatives =  arr.filter( x => x < 0)
    let sumOfNegatives = 0
    negatives.forEach( (x) => {
        sumOfNegatives += x
    })
    return sumOfNegatives
}


/* Function: filterNulls
    Input: arr(array[any])
    Output: Returns a new array with all null values filtered out of the old array
/****/

function filterNulls(arr){
    return arr.filter( x => x !== null)
}


/* Function: capitalizeFirst
    Input: arr(array[strings])
    Output: Returns a new array that has all of the old array values, but the first letter of each array element is capitalized
/****/

function capitalizeFirst(arr){
    return arr.map( x => x[0].toUpperCase() + x.substring(1,x.length))
}


/* Function: removeIndex
    Input: arr(array[any]), index(number)
    Output: Returns a new array with an index removed from an old array. All values after that index should slide down.
/****/

function removeIndex(arr, index){
    return [...arr.slice(0,index),...arr.slice(index+1,arr.length)]
}



/* Function: insertVal
    Input: arr(array[any]), index(number), val(any)
    Output: Returns a new array that is the old array with a value inserted at the specified index.
/****/

function insertVal(arr,index,val){
    return [...arr.slice(0,index),val,...arr.slice(index,arr.length)]
}


/* Function: sortLength
    Input: arr(array[strings])
    Output: Returns a new array that is the old array sorted by string length descending. If two strings are the same length, the one that is alphanumberically higher should be placed first.
/****/

function sortLength(arr){
    return arr.sort((a,b) => {
        if(a.length === b.length){
            return a.localeCompare(b)
        }else{
            return b.length - a.length

        }
    })
}



/* Function: describeObject
    Input: obj(Object)
    Output: Print a string that says 'This object has X properties'
/****/

function describeObject(obj){
    return `This object has ${Object.keys(obj).length} properties`
}

/* Function: mergeObjects
    Input: obj1(Object), obj2(Object)
    Output: Return new object with obj2's properties merged onto obj1. Any similar properties will take obj2's values.
/****/

function mergeObject(obj1,obj2){
    return {
        ...obj1,...obj2
    }
}

/* Function: objectValues
    Input: obj(Object)
    Output: Return an array containing all of the values of the object that are 3 characters or less ( assume all object values are strings)
/****/

function objectValues(obj){
    return Object.values(obj).filter( x => x.length <= 3)
}


/* Function: getTall
    Input: arr(array[{name: String, age: Number, height: Number }])
    Output: Return a new array with containing objects from the old array with age < 18 and height >= 6.0
/****/

function getTall(arr){
    return arr.filter(x => x.height > 6.0 && x.age < 18)
}

//TODO: export your functions
module.exports = {
    sumNegative,
    filterNulls,
    capitalizeFirst,
    removeIndex,
    insertVal,
    sortLength,
    describeObject,
    mergeObject,
    objectValues,
    getTall
}


