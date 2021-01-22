// Object destructing
// console.log('Hello');

// const person = {
//     name: 'Daniel',
//     age: 28,
//     location: {
//         city: 'Porto',
//         temp: 15
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if(city && temperature){
//     console.log(`It's ${temperature}ºC in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// Array destructing

// const address = [
//     'Rua Conselheiro Luís Magalhães, 1082', 
//     'Porto',
//     'Portugal',
//     '4470-616'
// ];

// const [, city, country = 'Portugal'] = address;

// console.log(`You're in ${city}, ${country}.`);

const menu = [
    'coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [item, , price] = menu;

console.log(`A medium ${item} costs ${price}.`);