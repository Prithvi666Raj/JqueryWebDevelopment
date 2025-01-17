
// function a() {
//     var b =10;
//     c();
//     function c() {
    
//   }
// }
// a();
// console.log(b);

// function a(){
//     console.log(b);
// }
// var b = 10;
// a();

// function a() {
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();


const add=(function()
      {
        let count=1;
        return (function()
           {
               return count++
          })
      })()
console.log(add())
console.log(add())
console.log(add())