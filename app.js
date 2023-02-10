// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
function doubleValues(val){
    const doublesArr = [];
    val.forEach(num => {
        doublesArr.push(num *2);
    });
    return doublesArr;
}


// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(val){
    const evenNum=[];
    val.forEach(num => {
        if (num%2==0) {
            evenNum.push(num);
        }
    });
    return evenNum;
}


// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


function showFirstAndLast(names){
    const listAbbreviations=[];
    names.forEach(function(name){
        let s="";
        s=name[0];
            s+=name[name.length-1];
listAbbreviations.push(s)
    });
    return listAbbreviations;
}