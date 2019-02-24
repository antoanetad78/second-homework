const people = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]

function groupAdultsByAgeRange(people) {
    const adults = people.filter(person => person.age>17)
    const groups = adults.reduce((acc, curr)=>{
        
        if(curr.age<21){
            acc['20 and younger'] = []
            return acc
        }
        if (curr.age>20 && curr.age<31){
            acc['21-30']=[]
            return acc
        }
        if (curr.age>30 && curr.age<41){
            acc['30-41']=[]
            return acc
        }
        if (curr.age>40 && curr.age<51){
            acc['40-51']= []
            return acc
        }
        if (curr.age>50){
            acc['51 and older']= []
            return acc
        }           
    }, {})
    
    let result= adults.reduce((acc, curr) =>{
            if (curr.age<21){
             acc['20 and younger'] = acc['20 and younger'].concat(curr)
             return acc
            }
            if (curr.age>20 && curr.age<31){
             acc['21-30']=acc['21-30'].concat(curr)
             return acc
            }
            if (curr.age>30 && curr.age<41){
            acc['30-41']=acc['30-41'].concat(curr)
            return acc
                
            }
            if (curr.age>40 && curr.age<51){
             acc['40-51']=acc['40-51'].concat(curr)
             return acc
            }
            if (curr.age>50){
             acc['51 and older']=acc['51 and older'].concat(curr)
                return acc
            }
        }, groups) 
return result
}

console.log(groupAdultsByAgeRange(people));


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange