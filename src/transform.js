function groupAdultsByAgeRange(people) {
    const adults = people.filter(person => person.age>17)
    
    adults.reduce((acc, curr) =>{
        
        if (curr.age<21){
            acc['20 and younger'].concat(curr)
        return acc;
        }
        if (curr.age>20 && curr.age<31){
            acc['21-30'].concat(curr)
            return acc
        }
        if (curr.age>30 && curr.age<41){
            acc['30-41'].concat(curr)
            return acc
        }
        if (curr.age>40 && curr.age<51){
            acc['40-51'].concat(curr)
            return acc
        }
        if (curr.age>50){
            acc['51 and older'].concat(curr)
            return acc
        }
    },
    {'20 and younger': [],
    '21-30':[],
    '31-40': [],
    '41-50':[],
    '51 and older':[]
}) 
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange