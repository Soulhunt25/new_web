// function fun1(a){
//     console.log('I am an outer function');
//     console.log(a);
//     a()
// }

// fun1(function fun2(){
//     console.log('I am an Inner function');
// })

// ........................................................

// function fun1() {
//     console.log('i am an outer function');
//     function fun2() {
//         console.log('I am an inner function');
//     }

//     return fun2;
// }

// let a = fun1();

// a();
// console.log(a);

// ........................................................

// let arr = [1,2,3,4,5,'poiuytres','kjhgf',false,true];

// function fun1(a){
//     let result=[]
//     for(let i of a){
//         if (typeof i === 'number') {
//             result.push(i);
//         }
//     }
//     return result
// }

// function fun2(a){
//     let result=[]
//     for(let i of a){
//         if (typeof i === 'string') {
//             result.push(i);
//         }
//     }
//     return result
// }

// function fun3(a){
//     let result=[]
//     for(let i of a){
//         if (typeof i === 'boolean') {
//             result.push(i);
//         }
//     }
//     return result
// }
// console.log(fun1(arr));
// console.log(fun2(arr));
// console.log(fun3(arr));

// ........................................................

// SetTime out function

// setTimeout(()=>{
//     console.log('A');
// },1000);
// setTimeout(()=>{
//     console.log('B');
// },2000);
// setTimeout(()=>{
//     console.log('zero');
// },0);
// console.log("two");
// console.log("three");