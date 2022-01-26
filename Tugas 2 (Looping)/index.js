//Perulangan For, For in, For off
const archon = ["Venti", "Jongli", "Tsaritsa", "Baal"];

for (let i = 0; i < archon.length; i++) {
  console.log(archon[i]);
}

const gender = ['Male', 'Female', 'Gay'];
let a = 0;
for (let a in gender) {
  console.log(gender[a]) ;
}

const nickname = ["Zenxlay", "Diavolo", "LacKi"];
for (let x of nickname) {
  console.log(x);
}


//spread syntax
function spread(num1, ...args){
console.log(num1, ...args);
}
spread(1,2,"zen",false)



//Function perkalian + Arrow function
let hasil = (a, b) => {
    perkalian = a * b;
};

hasil(9, 4)
console.log(perkalian);
