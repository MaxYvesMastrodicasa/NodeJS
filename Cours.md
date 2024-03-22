# Node.js : Cours

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

la fonction .map() à pour argument une autre fonction

```bash

map( ()=>{} )

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

les middleware et les routes permettent de récupérer les informations du serveurs (peut etre)

un middleware est une fonction qui s'execute à chaque requete envoyer au serveur.
Il prend 2 ou 3 arguments de type :
```bash
const middleware1(requete, reponse, next)
``` 
Exemple type :
```bash
app.use("/", (req, res, next) => {
  console.log(req.toto);
  next();
});

app.get("/", (req, res) => {
  res.render("home", {});
});
```

### Async API
Les opération asynchrone peuvent avoir 3 étoiles
- pending (en cours)
- resolved 
- rejected

exemple :
```bash
const res = fetch("https://swapi.dev/api/films/1/")
```
res est de type promise
```bash
.them((result)=> console.log(result))
.catch((error)=> console.log(error))
```


## TD 1 Fonction
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

## TD2 Tableau

1. Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.

2. Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.

3. Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.

4. Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.

5. Créez un tableau contenant les notes de cinq étudiants. Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console.

6. Créez un tableau contenant des noms d'oiseaux. Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau.

7. Créez un tableau contenant des noms de pays. Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.

8. Créez un tableau contenant les noms des mois de l'année. Écrivez un programme qui affiche le troisième élément du tableau.

9. Créez un tableau contenant des nombres aléatoires. Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.

10. Créez un tableau contenant des phrases. Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.


## TP Serveur Web

### Date limite de rendu : 22/03/2024 à 23h59
#### Modalités de rendu 
Une aplication Node/Express/EJS/BDD:

- Un repository Git (GitHub, GitLab, Bitbucket, etc.) contenant le code source de l'application
- Un dump de la base de données
- un fichier README.md contenant les instructions pour installer et lancer l'application
- Fonctionnalités attendues
- Architecture MVC
- Authentification (optionnel) : inscription, connexion, déconnexion, protection de routes avec middleware
- CRUD (1 tables minimum) : CREATE READ UPDATE DELETE (si vous n'y arrivez pas, vous pouvez faire un CRUD sur un fichier JSON,ou js)
- 2 ressources affichées dans des vues EJS

Attention à la qualité du code (indentation, nommage, etc.)
Attention à placer des commentatires au bon endroit 