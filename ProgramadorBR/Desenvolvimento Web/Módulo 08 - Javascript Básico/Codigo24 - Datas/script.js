// year, month, day, hours, minutes, seconds, milliseconds
var d = new Date('september 5, 2018 09:00:00');
var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
console.log(d);
console.log(d.getFullYear());
console.log(d.getDate());
console.log(dias[d.getDay()]);
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(meses[d.getMonth()]);
console.log(d.getTime());

console.log(d.setDate(10));
console.log(d.setMonth(1));
console.log(d.setFullYear(2021));
console.log(d);

/*
getDate() : Retorna o dia do mês (1-31)

getDay() : Retorna o dia da semana (0-6)

getFullYear() : Retorna o ano (4 dígitos)

getHours() : Retorna a hora (0-23)

getMilliseconds() : Retorna os milisegundos desde 1/1/1970

getMinutes() : Retorna os minutos (0-59)

getMonth() : Retorna o mês (0-11)

getSeconds() : Retorna os segundos (0-59)

getTime() : Retorna o timestamp (milisegundos desde 1/1/1970)

getTimezoneOffset() : Retorna a diferença de fuso horário (minutos)

getUTCDate() : Retorna o dia do mês (1-31)

getUTCDay() : Retorna o dia da semana (0-6)

getUTCFullYear() : Retorna o ano (4 dígitos)

getUTCHours() : Retorna a hora (0-23)

getUTCMilliseconds() : Retorna os milisegundos desde 1/1/1970

getUTCMinutes() : Retorna os minutos (0-59)

getUTCMonth() : Retorna o mês (0-11)

getUTCSeconds() : Retorna os segundos (0-59)

getYear() : Retorna o ano (2 dígitos)

now() : Retorna o timestamp atual (milisegundos desde 1/1/1970)

parse() : Converte uma string para um timestamp

setDate() : Define o dia do mês (1-31)

setFullYear() : Define o ano (4 dígitos)

setHours() : Define a hora (0-23)

setMilliseconds() : Define os milisegundos desde 1/1/1970

setMinutes() : Define os minutos (0-59)

setMonth() : Define o mês (0-11)

setSeconds() : Define os segundos (0-59)

setTime() : Define o timestamp (milisegundos desde 1/1/1970)

setUTCDate() : Define o dia do mês (1-31)

setUTCFullYear() : Define o ano (4 dígitos)

setUTCHours() : Define a hora (0-23)

setUTCMilliseconds() : Define os milisegundos desde 1/1/1970

setUTCMinutes() : Define os minutos (0-59)

setUTCMonth() : Define o mês (0-11)

setUTCSeconds() : Define os segundos (0-59)

setYear() : Define o ano (2 dígitos)

toDateString() : Retorna a data no formato DD/MM/YYYY

toGMTString() : Retorna a data no formato GMT

toISOString() : Retorna a data no formato ISO

toJSON() : Retorna a data no formato JSON

toLocaleDateString() : Retorna a data no formato local

tostring() : Retorna a data no formato padrão

totimeString() : Retorna a data no formato HH:MM:SS

toUTCString() : Retorna a data no formato UTC

UTC() : Converte a data para UTC

valueOf() : Retorna o timestamp da data


*/