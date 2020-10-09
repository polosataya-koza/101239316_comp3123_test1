const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(array) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        if (array.filter(e => typeof e === 'string' && e !== '').every(word => typeof word === 'string')) {
            // Resolve the promise
            resolve(array.filter(e => typeof e === 'string' && e !== '').map(word => word.toLowerCase()));
        }
        else {
            //Reject the promise
            reject('Error!');
        }
    });
}

//Call
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))