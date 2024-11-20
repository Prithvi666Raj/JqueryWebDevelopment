/** Question-1
var a=1;
let b=2;
const c=3;

    {
        var a=10;
        let b=20;
        const c=30;
        console.log("Inside a Scope")
        console.log(a)
        console.log(b)
        console.log(c)
    }

console.log("Outside Scope")
console.log(a)
console.log(b)
console.log(c)
 */

/**Question-2 

var a=1;
let b=2;
const c=3;
{
    a=10;
    b=20;
    const c=30;
    console.log("Inside a Scope")
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log("Outside a scope")
console.log(a)
console.log(b)
console.log(c)
*/


var a=1;
let b=2;
const c=3;

function greet()
{
    a=10;
    b=20;
    const c=30;
    console.log("Inside Greet Function")
    console.log(a)
    console.log(b)
    console.log(c)
}

greet()

console.log("Outside a Function")
console.log(a)
console.log(b)
console.log(c)