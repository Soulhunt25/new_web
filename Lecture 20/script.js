// Call Back Function

// function callBack(a){
//     console.log('hello');
//     a()
// }

// function sum(){
//     console.log('hiii');
// }

// callBack(sum)

// ........................................................

// Set interval function

// setInterval(()=>{
//     console.log('hiii');
    
// },2000)

// ........................................................

// Asynchronous Programming

// Callback Hell

// function step1(fn){
//     setTimeout(()=>{
//         console.log('Select Photo');
//         fn()
//     },4000);
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filter');
//         fn()
//     },3000);
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('caption');
//         fn()
//     },2000);
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('post');
//     },1000);
    
// }

// step1(function(){
//     step2(function(){
//         step3(()=>{
//             step4()
//         })
//     })
// })

// ........................................................

// Promises 

// let promise = new Promise((res,rej)=>{ // (true,false)
//     let barish = false;
//         setTimeout(()=>{
//             if(barish){
//                 rej('barish hooo rahi ha is liye class cancel');
//             }
//             else{
//                 res('class ana haa kuch bhi hoo jaya');
//             }
//         },2000)
// });

// console.log(promise);


// promise.then((data)=>{
//     console.log(data) // Positive (res)
// }).catch((err)=>{
//     console.log(err); // Negative(rej)
// });

// Instagram

// let promise = new Promise((res,rej)=>{
//     let photo = true;
//         setTimeout(()=>{
//             if(photo){
//                 res(step1(function(){
//                     step2(function(){
//                         step3(()=>{
//                             step4()
//                         })
//                     })
//                 }));
//             }
//             else{
//                 rej('No photo selected')
//             }
//         },2000)
// })

// promise.then((data)=>{
//     // console.log(data) // Positive (res)
// }).catch((err)=>{
//     console.log(err); // Negative(rej)
// });


// function step1(fn){
//     setTimeout(()=>{
//         console.log('Select Photo');
//         fn()
//     },4000);
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filter');
//         fn()
//     },3000);
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('caption');
//         fn()
//     },2000);
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('post');
//     },1000);
// }