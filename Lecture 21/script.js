// Promises chain

// function step1() {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('select');
//         },4000)
//     })
// }

// function step2() {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('filter');
//         },3000)
//     })
// }

// function step3() {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('capation');
//         },2000)
//     })
// }

// function step4() {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('post');
//         },1000)
//     })
// }

// step1().then((data)=>{
//     console.log(data);
//     return step2().then((data)=>{
//         console.log(data);
//         return step3().then((data)=>{
//             console.log(data);
//             return step4().then((data)=>{
//                 console.log(data);
//             })
//         })
//     })
// })

// ........................................................

// asyanc / await keywords


// function step1() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('select');
//             res();
//         }, 4000)
//     })
// }

// function step2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('filter');
//             res();
//         }, 3000)
//     })
// }

// function step3() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('capation');
//             res();
//         }, 2000)
//     })
// }

// function step4() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('post');
//             res();
//         }, 1000)
//     })
// }

// async function call() {
//     await step1()

//     await step2()

//     await step3()

//     await step4()
// }

// call()

// ........................................................

// Closer

// Return takes a copy of it's parent

// function outer() {
//     let data = 5;
//     console.log('outer');
//     function inner() {
//         console.log(data);
//     }
//     return inner;
// }

// let a = outer();
// a();

// ........................................................

// DOM (Doucment Object Model)

// let a = document.getElementById('btn');
// let a = document.getElementsByTagName('button');
// let a = document.getElementsByClassName('btn');
// console.log(a);

// let btn = document.querySelectorAll('#btn')
// let btn = document.querySelectorAll('.one')
// let btn = document.querySelectorAll('button')

// console.log(btn);