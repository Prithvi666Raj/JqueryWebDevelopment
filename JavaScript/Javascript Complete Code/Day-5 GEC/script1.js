// console.log("Start")
// var a=1;
// let b=2;
// const c=3;
// console.log(d)
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     var d=40;
//     console.log("Inside a scope")
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// console.log("Outside a Scope")
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log("End")


console.log("Start");
let a=10;
const b=20;
    {
        var c=30;
        let d=40;
        e=50;
        console.log("Inside a scope")
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        console.log(e)
    }
var e;
console.log("Outside a scope")
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)