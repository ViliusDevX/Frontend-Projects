'use strict';

//UZD1
let pir, ant, tre, ket, pen;
pir = +prompt("Kiek pamoku yra pirmadieni? ");
ant = +prompt("Kiek pamoku yra antradieni? ");
tre = +prompt("Kiek pamoku yra treciadieni? ");
ket = +prompt("Kiek pamoku yra ketvirtadieni? ");
pen = +prompt("Kiek pamoku yra penktadieni? ");

let pamoku_sk = pir + ant + tre + ket + pen;
let pamoku_min = pamoku_sk * 45;

console.log("Pamoku skaicius: ", pamoku_sk, "\n Tai sudaro minuciu: ", pamoku_min);

//UZD2
let prad_zuv, deda_zuv, dienos;

prad_zuv = +prompt("Kiek zuvu gyvena akvariume? ");
deda_zuv = +prompt("Kiek zuvu dedama kiekviena diena? ");
dienos = +prompt("Kiek dienu praejo? ");

let viso_zuv = prad_zuv + (deda_zuv * dienos);

console.log("Po ", dienos, " dienu akvariume gyvenas ", viso_zuv, " zuvu");

//UZD3
let a, b, c, suma, eurai;

a = +prompt("Kiek yra monetu po 5 ct? ");
b = +prompt("Kiek yra monetu po 20 ct? ");
c = +prompt("Kiek yra monetu po 2 eur? ");

suma = (a * 5) + (b * 20) + (c * 200);
eurai = suma / 100;
console.log("Taupykleje yra: ", eurai, " EUR.");

//UZD4
let ilgis, s, v;
ilgis = 264;
v = +prompt("Koks yra automobilio greitis? ");

s = ilgis / (v * 1000 / 3600); 
s = Number.parseFloat(ilgis / (v * 1000 / 3600)).toPrecision(4);
console.log("Automobilis tuneli pravazios per: ", s, " s");

//UZD5
let ilgis, aukstis, kaina, kiekis, final_kaina;

ilgis = 4;
aukstis = 3;
kaina = 0.5;
kiekis = (ilgis / 0.2) * (aukstis / 0.1);
final_kaina = kiekis * kaina;

console.log("Ilgis: ", ilgis, "\n Aukstis: ", aukstis, "\n Kaina: ", kaina);    
console.log("Plytu kiekis: ", kiekis, "\n Plytos kainuos: ", final_kaina);

UZD6
let a, b, h, plotas;
a = +prompt("Trapecijos ilgesniojo pagrindo ilgis: ");
b = +prompt("Trapecijos trumpesniojo pagrindo ilgis: ");
h = +prompt("Trapecijos aukstines ilgis: ");

plotas = ((a + b) / 2) * h;
console.log("Trapecijos plotas: ", plotas);

//UZD7
let m, telpa_puod, piln_diez, liko_puod;

telpa_puod = 3;
m = +prompt("Kiek reikia supakuot puodeliu: ");

piln_diez = Math.floor(m / telpa_puod);
liko_puod = Math.floor(m % piln_diez);
console.log("Pilnu dieziu sk: ", piln_diez, "\n Liko puodeliu: ", liko_puod);

//UZD8
let aut_sk, aut_telpa, perkels_kart, liks, aut_perkels;

aut_sk = +prompt("Kiek yra automobiliu: ");
aut_telpa = +prompt("I kelta telpa automobiliu: ");
perkels_kart = Math.floor(aut_sk / aut_telpa);
liks = aut_sk - (aut_telpa * perkels_kart);
aut_perkels = aut_sk - liks;

console.log("Persikels: ", perkels_kart, "\n Liks: ", liks);

//UZD9
let iskepe_saus, draug_atnese, dalyv, gavo, liko;
iskepe_saus = +prompt("Tautvydas iskepe sausainiu: ");
draug_atnese = +prompt("Draugu atnese tiek pat sausainiu: ");
dalyv = +prompt("Kiek zmoniu is viso dalyvavo: ");

gavo = (iskepe_saus + (draug_atnese * iskepe_saus)) / dalyv;
liko = Math.round((iskepe_saus + (draug_atnese * iskepe_saus)) % gavo);
console.log("Kiekvienas gavo: ", Math.round(gavo), "\n Liko sausainiu: ", liko);

//UZD10
let gauna, suvalgo, liko_d, draugai, sald_rink, sald_liks, viso_sald;

gauna = +prompt("Kiek gauna saldainiu: ");
suvalgo = +prompt("Kiek suvalgo saldainiu: ");
liko_d = +prompt("Kiek liko dienu iki Kaledu: ");
sald_rink = +prompt("Kiek saldainiu yra viename rinkinyje: ");

viso_sald = (gauna - suvalgo) * liko_d;
draugai = viso_sald / sald_rink;
sald_liks = viso_sald % sald_rink;

console.log("Marius dovanas paruos", Math.floor(draugai), " draugu");
console.log("Supakavus dovanas liks", sald_liks, " saldainiai");

