// 1 var, let e const 
var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(5)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i<5; i++){
    console.log(i)
}

console.log(i)

function logName(){
    const name = 'Ryan'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)

//Não se pode mudar o valor de uma const Ex: name = Joao

//2 arrow function

const sum = function sum(a,b){
    return a + b
}

const arrowSum = (a,b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name){
        return 'Olá ' + name + '!'
    }else{
        return 'Olá'
    }
}

console.log(greeting("Ryan"))
console.log(greeting())

const testeArrow = () => console.log('testou!')

testeArrow()

const user = {
    name : 'Theo',
    sayUserName(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log('Username: ' + self.name)
        },500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        },700)
    },
}

//user.sayUserName()
//user.sayUserNameArrow()

// 3 filter

const arr = [1,2,3,4,5]

const highNumber = arr.filter((n) => {
    if(n > 3){
        return n 
    }
})

console.log(highNumber)

const users = [
    {name: 'Matheus', available: false},
    {name: 'Ryan', available: true},
    {name: 'Rafael', available: true},
    {name: 'Julia', available: false},
    {name: 'Leticia', available: true},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)



