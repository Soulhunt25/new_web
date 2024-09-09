// let arr = [1,2,3,4,5,6];
// let obj = {
//     id : 1,
// };

// jason format  ()

// let data = [
//     {
//         id : 1,
//         name : 'Pranjal'
//     },
//     {
//         id : 2,
//         name : 'llll'
//     },
//     {
//         id : 3,
//         name : 'aaaaaaaaaaa'
//     },
//     {
//         id : 4,
//         name : 'dffffffffff'
//     }
// ]

// console.log(data[0].id);

// data.map((a)=>{
//     console.log(a.id);
//     console.log(a.name);
// })

// data.filter((a,b,c)=>{
//     return a.id > 1;
// }).map((b)=>{
//     console.log(b.name);
// })
/////////////////////////////////////////////////////////////////////////////
// let arr = [1,2,3,45,6,9,7,4,3,1,5,2,4,6,225,5,56,65]

// let asdf = arr.filter((a)=>{
//     return a > 2;
// }).filter((b)=>{
//     return b!=0;
// }).reduce((c,d)=>{
//     return c+d;
// })

// console.log(asdf);

// let newarr = arr.filter((a)=>{
//     return a > 2;
// })

// console.log(newarr);

// let Newarr = newarr.filter((a) => {
//     return a != 2;
// })

// console.log(Newarr);

// let newArr = Newarr.reduce((a,b) => {
//     return a+b;
// })

// console.log(newArr);

//////////////////////////////////////////////////////

// let dataa = [
//     {
//         "id": 1,
//         "name": "John Doe",
//         "email": "john.doe@example.com",
//         "age": 28,
//         "address": {
//             "street": "123 Main St",
//             "city": "Anytown",
//             "state": "CA",
//             "zip": "12345"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Jane Smith",
//         "email": "jane.smith@example.com",
//         "age": 32,
//         "address": {
//             "street": "456 Oak St",
//             "city": "Somewhere",
//             "state": "NY",
//             "zip": "67890"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Emily Johnson",
//         "email": "emily.johnson@example.com",
//         "age": 24,
//         "address": {
//             "street": "789 Pine St",
//             "city": "Elsewhere",
//             "state": "TX",
//             "zip": "11223"
//         }
//     }
// ]

// dataa.map((a) => {
//     console.log(a.address.city); 
// })
////////////////////////////////////////////////////
// Random number generate

let data = Math.random()*100;
console.log(Math.floor(data)*50);
//////////////////////////////////////////////////
// Current Date and time

let date = new Date().toLocaleDateString();
console.log(date);


let time = new Date().toLocaleTimeString()
console.log(time);