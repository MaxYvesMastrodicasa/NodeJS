import {divide , add, greatest, descending} from "./src/utils/math.js";
import { getConsonantUp, dicoMode, getNumberVowel, getVowelUp, letterizer, subVowels } from "./src/utils/litteral.js";
import {getAddArray, getAllArray,getDayArray,getSumArray,} from "./src/utils/array.js";

const a = 45, b=42; 
console.log("1. Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme\n\r "+a+" + "+b+" = " + add(a,b)+"\n\r")

const tableau = [1,45,23,98,16,4852,19,37];
console.log("2. Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.\n\r Le plus grand nombre du tableau suivant : \n\r"+ "tableau = "+tableau+"\n\r est : "+greatest(tableau)+"\n\r")

const sentence = "Je n'est pas de voyelle";
console.log("3. Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.\n\r La phrase suivante : "+sentence+"\n\r sans voyelles : "+subVowels(sentence)+"\n\r");

const sortMe = ["bonjour", "avocat", "zèbre", "marche", "wagon"];
console.log("4. Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.\n\r La liste suivante sera triée par ordre alphabétique : \n\r Avant : "+sortMe+"\n\r Après : "+dicoMode(sortMe)+"\n\r");

const userAnswer = 600;
console.log("5. Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner 'quarante-deux'.\n\r Un nombre est inscrit en dur, s'il ne vous plait pas changez le.. \n\r "+userAnswer+" : "+letterizer(userAnswer)+"\n\r");

console.log("6. Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.\n\r")

const tableau2valeur = [36,15,49,35,10,18];
console.log("7. Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.\n\r Le tableau ci dessous, sera classé par ordre décroissant : \n\r "+tableau2valeur+ "\r\n " +descending(tableau2valeur)+"\r\n");

const charchain = "flidfgazjkepazsadhihd";
console.log("8. Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.\n\r Cette chaîne de caractères '"+charchain+"' va avoir ces voyelles en mauscules.. \n\r" + getVowelUp(charchain)+"\r\n")

const charchain2 = "Bonjour, j'ai beaucoup de voyelles."
console.log("9. Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.\n\r Cette chaîne de caractères '"+charchain2+"' a "+getNumberVowel(charchain2) +" voyelles. \n\r")

const charUpChain = "aminomethylpyrimidinylhydroxyethylmethythiazolium"
console.log("10. \n\r Cette chaîne de caractères '"+charUpChain+"' va avoir ces consonnes en mauscules.. \n\r" + getConsonantUp(charUpChain)+"\r\n")

//--------------------------------------TD 2----------------------------------------------------------

console.log("\r\n \r\n \r\n   TD 2 : Les tableaux \r\n")

const numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("1. Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.\r\n")
getAllArray(numberArray)
console.log("\r\n")

console.log("2. Créez un tableau contenant les jours de la semaine. Écrivez un programme qui affiche le premier jour de la semaine à la console.\r\n" +getDayArray(1)+ "\r\n")

const oddarray = [2,4,6,8,10]
console.log("3. Créez un tableau contenant les nombres pairs de 2 à 10. Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console. \r\n" + getSumArray(oddarray) +"\r\n")

const fruitsArray = ["mangue", "passion", "ananas", "goyave", "kiwi"];
console.log("4. Créez un tableau contenant les noms de cinq fruits. Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.\n\r Avant : "+fruitsArray+"\r\n Je rajoute le mangoustant\r\n Après : "+ getAddArray(fruitsArray,"mangoustant"))+"\n\r";