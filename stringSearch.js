// string indexof

let a = "happy birthdayy 'to you' ";
let b = a.indexOf('to you');
console.log(b);


let c = "happy birtday 'to youhh' me ";
let d = c.lastIndexOf('to you');
console.log(d);

let e = "hello word 'happy' hi ";
let f = e.search('happy');
console.log(f);


let text = "The rain in SPAIN stays mainly in the plain";
let ts = text.match('ain');
console.log(ts);

let t = "The rain in SPAIN stays mainly in the plain";
let p = t.matchAll('ain');
console.log(p);

let too = "The rain in SPAIN stays mainly in the plain";
let o = too.includes('ain');
console.log(too);

let tos = "The rain in SPAIN stays mainly in the plain";
let l = tos.startsWith('ain');
console.log(l);

let to = "The rain in SPAIN stays mainly in the plain";
let u = to.endsWith('ain');
console.log(u);

