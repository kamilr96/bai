// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
p = (b+c+h)/2;
pole_heron = Math.sqrt(p*(p-b)*(p-c)*(p-h));
let a = () => `Pole trójkąta o bokach ${b}, ${c} oraz ${h} wynosi ${pole_heron}.`;

console.log( a() );