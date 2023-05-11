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
// console.log(object.age);
// console.log(object.country);
// console.log(object.dev);
// console.log(object.stu);








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
