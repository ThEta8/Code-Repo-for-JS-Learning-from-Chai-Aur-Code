// Datatypes

// Primitive Datatypes
// 7 Types: String, Number, boolean, null, undefined, Symbol, BigInt
const BigIntNum = 23456789098765432n
const null_Var = null;
let UndefEg; // or ; fflet UndefEg = undefined;
const varSymbol = Symbol('123')
const varSymbol1 = Symbol('123')


// No Specific Data type for 'Decimal'




// Refecence|Non-Primitive Datatypes
// Array, Object, Function
const ArrEg = ["one", "Two", "three"]

const objEg = {
    Language: "Javascript",
    Runtime: "NodeJs"
}

const MyFunction = function(){
    console.log("Hello Earth");
}

// console.log(varSymbol === varSymbol1);
//console.log(typeof(n))


///////////////////////////////////++Memory Types

// Stack(Primitive datatype), Heap(Non-Primivtive datatype)

let stackVar = "Marshmello";

let famousName = stackVar
famousName = "AlanWalker"

// console.log(famousName);
// console.log(stackVar);

//Heap 
const UserOne = {
    Email : "UserOne@google.com",
    Name : "John"
}

const UserTwo = UserOne

UserTwo.Name = "Marshmello"

console.log(UserOne.Name);
console.log(UserTwo.Name);

