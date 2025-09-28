'use strict'

// UZD1
let kr1, kr2, kr3, perimetras;
kr1 = Number(prompt("Iveskit pirma krastine: "));
kr2 = Number(prompt("Iveskit antra krastine: "));
kr3 = Number(prompt("Iveskit trecia krastine: "));

perimetras = kr1 + kr2 + kr3;

console.log("Perimetras: ", perimetras);

//UZD2
let pirmas, antras, x;
pirmas = +prompt("Ivesk pirma kampa: ");
antras = +prompt("Ivesk antras kampa: ");
x = 180 - (pirmas + antras);

console.log("Pirmas: ", pirmas, "antras: ", antras);
console.log("Trecias kampas: ", x);

//UZD3
let km, m;
km = +prompt("Ivesk km skaiciu: ");
m = km * 1000;

console.log("Gauta m: ", m);

//UZD4
let km_2, m_2, metrai;
km_2 = +prompt("Ivesk km skaiciu: ");
metrai = +prompt("Ivesk metru skaiciu: ");
m_2 = (km_2 * 1000) + metrai;

console.log("Gauta: ", m_2);

//UZD5
let val, diena, savaite;
val = 18;
diena = val * 24;
savaite = diena * 7;

console.log("Gauta per diena:", diena, "\n Per savaite: ", savaite);

//UZD6
let dienos, sav;
dienos = +prompt("Ivesk kiek dienu praejo");
sav = dienos / 7;
console.log("Praejo :", sav, "savaites");

//UZD7
let n, m, k, s;
m = +prompt("Kiek saldainiu nupirko mokyoja: ");
n = +prompt("Kiek dalyvavo devintoku: ");

s = m / n;
k = m - n;
console.log("Gauta: s = ", s, "k = ", k);

//UZD8
let ct, eg, ctg;
ct = +prompt("Ivesk centus: ");

eg = Math.floor(ct / 100);
ctg = ct % 100;

console.log("Gauta: ", eg, "eur ir ", ctg, "ct");

//UZD9
let h, min, truk, h1, min1, is_viso_min;
h = +prompt("Kelinta dabar valanda: ");
min = +prompt("Ir kiek minuciu: ");
truk = +prompt("Kiek minuciu trunka skrydis: ");
is_viso_min = h * 60 + min + truk;
h1 = Math.floor(is_viso_min / 60) % 24;
min1 = is_viso_min % 60;
console.log("Skrydis baigsis: ", h1, "val. ", min1, "min.");

//UZD10
let h, min, h1, min1, trukme, pradzios_min, pabaigos_min, reklamu_min, min_filmo, pabaigos_h, pabaigos_minutes;

h = +prompt("Kelinta dabar valanda: ");
min = +prompt("Kiek dabar minuciu: ");
h1 = +prompt("Kiek trunka valandu filmas: ");
min1 = +prompt("Kiek minuciu trunka filmas: ");

min_filmo = h1 * 60 + min1;
reklamu_min = 3 * 10;
trukme = min_filmo + reklamu_min;
pradzios_min = h * 60 + min;
pabaigos_min = pradzios_min + trukme;
pabaigos_h = Math.floor(pabaigos_min / 60) % 24;
pabaigos_minutes = pabaigos_min % 60;

console.log("Pabaigos val: ", pabaigos_h, "minutes: ", pabaigos_minutes);

//bandziau UZD11 padaryt bet neveikia galva jau