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










// //JS LESSON-3

// const foo = document.querySelector('.val'),
//        num = document.querySelector('.num'),
//        cur = document.querySelector('.cur'),
//        usd = document.querySelector('.usd'),
//        rubl = document.querySelector('.rubl'),
//        euro = document.querySelector('.euro'),
//        bar = document.querySelector('.bar');


// foo.addEventListener('submit', (event) =>  {
//     event.preventDefault()

//     let inp = +num.value

//    if (cur.value === usd.value) {
//     let dol = inp * 11465;
//        bar.textContent = `${dol} sum`
//    }else if (cur.value === rubl.value) {
//     let rub = inp * 149.13
//     bar.textContent = `${rub} sum`
//    }else if (cur.value == euro.value) {
//     let yev = inp * 12354.03
//     bar.textContent = `${yev} sum`
//    }else{
//     cur.classList.toggle('redb')
//    }

// })








//JS LESSON-4

// let elLetter = document.querySelector('.letter')
// let elSend = document.querySelector('.send')

// let MumLetter = 'Hello Mum'
// let FriendLetter = "Hello Friend"


// elLetter.addEventListener('change', (a) => {
//           a.preventDefault();

//     let selectValue = elSelect.value

//     if(selectValue == 'friend'){
//         elSend.value = MumLetter 
//     }else if(selectValue == 'mom') {
//         elSend.value = FriendLetter
//     }
// })








//JS LESSON-5

const foo = document.querySelector('.tempreture'),
      bar = document.querySelector('.tempreture__temp'),
      firstInput = document.querySelector('.rain'),
      secondInput = document.querySelector('.carridor'),
      yes = document.querySelector('.yes'),
      no = document.querySelector('.no');


foo.addEventListener('submit', (event) => {
        event.preventDefault();
            
    let barValue = Number(bar.value)

        if(barValue < 30 && barValue > 5){
         yes.style.color = 'green'   
         no.style.color = 'black'
        }else{
         yes.style.color = 'black'
         no.style.color = 'red'
        }
})

firstInput.addEventListener('click', ()=> {

    if(firstInput.checked){
        yes.style.color = 'black'
         no.style.color = 'red'
    }else{
        yes.style.color = 'green'   
         no.style.color = 'black'
    }
})

secondInput.addEventListener('click', ()=> {
    if(firstInput.checked && secondInput.checked && (barValue < 30 && barValue > 5)-0){
        yes.style.color = 'green'   
        no.style.color = 'black'
    }else if(firsInput.checked){
        yes.style.color = 'green'   
        no.style.color = 'black'
    }else if(barValue < 5 && secondInput.checked){
        yes.style.color = 'black'
         no.style.color = 'red'
    }else{
        yes.style.color = 'green'   
         no.style.color = 'black'
    }
})