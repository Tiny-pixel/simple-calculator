function addition(t,i)
{ var sum = 0
var sum = t + i
return sum

}
console.log(addition(11,3))


function AddMultipleNumbers()
{
    var sum = 0
    for (i = 0; i < arguments.length; i++) {
    sum += arguments[i]
    }
    return sum 
}

console.log(AddMultipleNumbers(1,2,3,10))
 

function multiply(n,y)
{
var product = 0;
var product = n * y
return product
}
console.log(multiply(8,5))

function multiplyMultipleNumbers(){
    var product = 1
    for(var i = 0; i < arguments.length; i++){
        product = product * arguments[i]
    }
    return product
}

console.log(multiplyMultipleNumbers(11,22,33,100))