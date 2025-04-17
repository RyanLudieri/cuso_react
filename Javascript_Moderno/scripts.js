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

//4 map
const products = 
[
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)

//5 templates literals
const userName = 'Ryan'
const age = 21

console.log(`O nome do usúario é ${userName} e ele tem ${age} anos.`)
console.log("O nome do usúario é " + userName + " e ele tem " + age + " anos.")

//6 destructuring

const fruits = ['Maçã', 'Laranja', 'Mamão']

const [f1, f2 , f3] = fruits

console.log(f1)

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Periféricos',
    color: 'Cinza'
}

const{
    name: productName,
    price,
    category: productCategory,
    color,
} = productDetails

console.log(`O nome do produto é ${productName}, custa ${price}, pertence a categoria ${productCategory} e tem a cor ${color}`)

// 7 spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1 , 4]

console.log(a4)

const carName = {name : 'Gol'}
const carBrand = { brand : 'VW'}
const otherInfos = {km: 100000, price: 49000}

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)


