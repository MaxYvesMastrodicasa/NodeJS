
# Node.js

## Partie 1 : Intro

NodeJs est un environnement d'execution permettant les actions, api, et appli. 
C'est un langage "non-compilé", il s'execute directement dans le navigateur ou l'environnement d'execution.

### Installation

https://nodejs.org/en

cmd -> node --version

### Vocabulaire
              fonction  argument
                 |        |
                 V        V
        console.log("Hello There");

#### Variable
```bash
    const test = "hello World";
    let test2 = "Hello World";
    var test3 = "Hello world"; //variable global
```

#### Fonction
```bash
// La syntaxe de base
function auCarre(x){
    return x * x;
}

// La syntaxe fléchée
const auCarre = (x) => {
    return x * x;
}

// si la fonction ne contient qu une seule instruction

const auCarre = x => x * x;

() => {}
```

#### Tableau
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
```bash
    const fruits = ["mangue", "passion", "ananas", "goyave"];
    fruits.push("papaye");
    console.log(fruits);

    const someVariable = [...fruits, "kiwi"];
    console.log(someVariable);
```

### Objet
```bash
const ben = {
    firstname: "Benjamin",
    lastname: "Seixeiro",
    age: "19",
    isStudent: true,
    hobbies: ["Fratelli","programming","Betclic"]
}

console.log(ben.firstname);

const newStudent = { ...ben, lastname:Franklin, age:20}
console.log(newStudent);
```

### Commande
```bash
node .\index.js

npm init
npm i -D <nom-de-la-dependance>
```
\ permet de sortir des doubles quotes

### Info

le fihier node_module augmente à chaque nouvelle dependence

Avec const et let on ne peut pas déclaré 2 fois la même variable.

