/*
const delayedSuccess = () => {
    setTimeout(() =>{
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500 )
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        }catch(e){
            console.error(e);
        }
    }, 500)
}
*/
function resolvedPromise () {
    return new Promise (function (resolve){
        setTimeout(() => resolve (console.log('message: delayed success!')), 500);
    })
}

function rejectedPromise () {
    return new Promise (function (reject){
        setTimeout(() => reject (console.log('error: delayed exception!')), 500);
    })
}

//Call
resolvedPromise()
    .then(result => console.log(result))

rejectedPromise()
    .catch(error => console.log(error))
