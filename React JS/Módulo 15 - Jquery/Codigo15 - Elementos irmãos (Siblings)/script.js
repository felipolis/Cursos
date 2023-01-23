let selected = $("#div3").siblings();
let selected2 = $("#div3").siblings('#div4');

let selected3 = $("#div3").nextAll();
let selected4 = $("#div3").nextAll('#div4');
let selected5 = $("#div3").next();

let selected6 = $("#div3").prev();
let selected7 = $("#div3").prevAll();
let selected8 = $("#div3").prevAll('#div1');

let selected9 = $("#div1").nextUntil('#div4');
let selected10 = $("#div5").prevUntil('#div2');


console.log(selected);
console.log(selected2);

console.log(selected3);
console.log(selected4);
console.log(selected5);

console.log(selected6);
console.log(selected7);
console.log(selected8);

console.log(selected9);
console.log(selected10);