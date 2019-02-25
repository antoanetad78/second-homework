function giveItBackLater(value, callback) {
    function myFunction() {
      return callback(value)
    }
    setTimeout(myFunction, 100)
}

function promiseToGiveItBackLater(value) {
    function myOtherFunction(givenValue) {
        return givenValue
    }
    const myValue = giveItBackLater(value,myOtherFunction)
    return new Promise((resolve, reject) => {
        
        if(myValue){
            resolve(myValue)
        }
        reject()
        
    })
}


function addSomePromises(somePromise) {
    const result = somePromise.then(res=>res)
    return new Promise((resolve, reject)=> { 
        resolve(result.then(res=>res))        
        reject(result.then(res=>res))  
    })
}
module.exports = {giveItBackLater,promiseToGiveItBackLater, addSomePromises }