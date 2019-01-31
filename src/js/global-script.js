// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

(function(){
  // code
  const name = 'Doode';
  let str = `
  Здравствуйте ${name}.
  Мы в ${new Date().getFullYear()} году
  `;
  let caption = document.querySelector('h1');
  console.log(str);

  const newCaption = 'ES6 работает';
  let anyFn = (elem) => {
    elem.innerText = `Новый заголовок: ${name}, ${newCaption}`;
  };
  anyFn(caption);

  // for ...of
const array = ['a', 'b', 'c', 'd'];
for (const element of array) {
    console.log(element);
}

function printf(format, ...params) {
  console.log('params: ', params);
  console.log('format: ', format);
}

printf('%s %d %.2f', 'adrian', 321, Math.PI);

}());
