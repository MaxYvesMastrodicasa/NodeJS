
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


2 syntaxe d'import export en JS :

    - La syntaxe CommonJS (utilisé dans Node)
    - La syntaxe ES6+ (utilisés dans les navigateurs) on parle de format ESM (ECMAScript Modules)

## TD 1
1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max


3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.

7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

