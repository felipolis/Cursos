
let selected = $("div");

let selected2 = $("div").filter(".div2");
let selected3 = $("div").filter("#div5");
let selected4 = $("#container2").children().filter(".div2");
let selected5 = $("#container2").children().first();
let selected6 = $("#container2").children().last();
let selected7 = $("#container2").children().not("#div8");
let selected8 = $("#container2").children().eq(2);


console.log(selected);
console.log(selected2);
console.log(selected3);
console.log(selected4);
console.log(selected5);
console.log(selected6);
console.log(selected7);
console.log(selected8);