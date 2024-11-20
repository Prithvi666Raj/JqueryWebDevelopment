/**
var a=1;
let b=2;
{
    c=3;
    console.log("Inside a scope");
    console.log(a);
    console.log(b)
    console.log(c)
}
console.log("Outside a scope")
console.log(a)
console.log(b)
console.log(c)  */


var a=1;
    {
        b=3;
        console.log("Inside a scope")
        console.log(a)
        console.log(b)
    }
let b=2;     
console.log("Outside a scope")
console.log(a)
console.log(b)







