'use strict';

//JS LESSON-1 

// let userName = prompt('Enter your name');
// let age = +prompt('Enter your age');
// let country = prompt('where are you from?');
// const dev = confirm('Are you a developper?');
// const stu = confirm('Are you a student?')

// const object = {
//     name: `Name: ${userName}`,
//     age : `Age: ${age}`,
//     country: `Country: ${country}`,
//     dev: `Developper: ${dev}`,
//     stu: `Student: ${stu}`
//  } 

// console.log(object.name);
// console.log(typeof object.age);
// console.log(object.country);
// console.log(object.dev);
// console.log(object.stu);






//JS LESSON-2

// let mon = +prompt('Chet elga sayohat uchun qancha pulingiz bor?');

// let arr = [Math.ceil(11000.34), Math.ceil(12354.03)];

// let prii = {
//     forTicket: 500 * arr[0],
//     forHotel: 250 * arr[0],
//     forTravelling: 120 * arr[1] 
// }

// console.log(`Borish kelish samalyot bileti: ${prii.forTicket} so'm`);
// console.log(`Mehmonxona to'lovi (to'liq safar davomiyligi uchun): ${prii.forHotel} so'm`);
// console.log(`Muzey va ko'ngil ochar joylar uchun: ${prii.forTravelling} so'm`);

// let foo = prii.forHotel + prii.forTicket + prii.forTravelling;

// console.log(`umumiy sarf xarajatlar: ${foo}`);

// if (mon >= prii.forHotel + prii.forTicket + prii.forTravelling) {
//     console.log('Oq yo`l Alisher');
// }else{
//     console.log(`Alisher, ozgina sabr qiling pulingiz ${foo - mon} yetmadi`);
// }










//JS LESSON-3

const foo = document.querySelector('.val'),
       num = document.querySelector('.num'),
       cur = document.querySelector('.cur'),
       usd = document.querySelector('.usd'),
       rubl = document.querySelector('.rubl'),
       euro = document.querySelector('.euro'),
       bar = document.querySelector('.bar');


foo.addEventListener('submit', (event) =>  {
    event.preventDefault()

    let inp = +num.value

   if (cur.value === usd.value) {
    let dol = inp * 11465;
       bar.textContent = `${dol} sum`
   }else if (cur.value === rubl.value) {
    let rub = inp * 149.13
    bar.textContent = `${rub} sum`
   } else {
    let yev = inp * 12354.03
    bar.textContent = `${yev} sum`
   }

})