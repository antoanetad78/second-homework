function giveItBackLater(value, callback) {
    function myFunction() {
      return callback(value)
    }
    setTimeout(myFunction, 100)
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve, reject) => {
        resolve(giveItBackLater(value, callback))
    })
}


function addSomePromises(somePromise) {
    return new Promise((resolve, reject)=> { 
        if(somePromise.then(res=>res)){
            resolve(res)
        }
        else{reject()}  
    })
}
module.exports = {giveItBackLater,promiseToGiveItBackLater, addSomePromises }