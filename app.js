// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
function doubleValues(val) {
    const doublesArr = [];
    val.forEach(num => {
        doublesArr.push(num * 2);
    });
    return doublesArr;
}


// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(val) {
    const evenNum = [];
    val.forEach(num => {
        if (num % 2 == 0) {
            evenNum.push(num);
        }
    });
    return evenNum;
}


// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


function showFirstAndLast(names) {
    const listAbbreviations = [];
    names.forEach(function (name) {
        let s = "";
        s = name[0];
        s += name[name.length - 1];
        listAbbreviations.push(s)
    });
    return listAbbreviations;
}


// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

// addKeyAndValue(
// [
//   {name: 'Elie'},
//   {name: 'Tim'},
//   {name: 'Matt'},
//   {name: 'Colt'}
// ],
//   'title',
//   'instructor'
// )

// /*
//   [
//     {name: 'Elie', title:'instructor'},
//     {name: 'Tim', title:'instructor'},
//     {name: 'Matt', title:'instructor'},
//     {name: 'Colt', title:'instructor'}
//   ]
// */


function addKeyAndValue(arr, key, val) {
    const newArr = [];
    arr.forEach(element => {
        element[key] = val;
        newArr.push(element)
    });
    return newArr;
}


// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount(stringer) {
    const str = stringer.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr = {};
    for (const vLetter of vowels) {
        let counter = 0;
        for (const wLetter of str) {
            if (vLetter === wLetter) {
                counter++;
            }
        }
        if (counter > 0) {
            arr[vLetter] = counter;
        }
    }
    return arr;
}

// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
// function doubleValuesWithMap(arr) {}


function doubleValuesWithMap(values) {
    const newArr = values.map(num => {
        return num * 2;
    });
    return newArr;
}


// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]


function valTimesIndex(values) {
    const newArr = values.map(num => {
        return num * values.indexOf(num);
    });
    return newArr;
}


// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )

//   // ['Elie', 'Tim', Matt', 'Colt']

function extractKey(arr, keyName) {
    const thisFucker = arr.map(fuckers => {
        return fuckers[keyName];
    })
    return thisFucker;
};


// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

// /*
// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ])

//   // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
// */


function extractFullName(arr) {
    const thisFucker = arr.map(fuckers => {
        return `${fuckers['first']} ${fuckers['last']}`;
    })
    return thisFucker;
};


// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

// filterByValue(
// [
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia", isCatOwner: true},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele", isCatOwner: true}
// ],
// 'isCatOwner'
// )

// /*
//   [
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ]
// */

function filterByValue(arr, keyName) {
    const val = arr.filter(item => {
        return item[keyName];
    });
    return val;
};