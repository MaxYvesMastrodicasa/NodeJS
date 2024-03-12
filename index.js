import {divide , add, greatest, descending} from "./src/utils/math.js";
import { getConsonantUp, dicoMode, getNumberVowel, getVowelUp, letterizer, subVowels } from "./src/utils/litteral.js";


const a = 45;
const b = 42;  
console.log("1. \n\r "+a+" + "+b+" = " + add(a,b)+"\n\r")

const tableau = [1,45,23,98,16,4852,19,37];
console.log("2. \n\r Le plus grand nombre du tableau suivant : \n\r"+ "tableau = "+tableau+"\n\r est : "+greatest(tableau)+"\n\r")

const sentence = "Je n'est pas de voyelle";
console.log("3. \n\r La phrase suivante : "+sentence+"\n\r sans voyelles : "+subVowels(sentence)+"\n\r");

const sortMe = ["bonjour", "avocat", "zèbre", "marche", "wagon"];
console.log("4. \n\r La liste suivante sera triée par ordre alphabétique : \n\r Avant : "+sortMe+"\n\r Après : "+dicoMode(sortMe)+"\n\r");

const userAnswer = 600;
console.log("5.\n\r Un nombre est inscrit en dur, s'il ne vous plait pas changez le.. \n\r "+userAnswer+" : "+letterizer(userAnswer)+"\n\r");

console.log("6. \n\r")

const tableau2valeur = [36,15,49,35,10,18];
console.log("7. \n\r Le tableau ci dessous, sera classé par ordre décroissant : \n\r "+tableau2valeur+ "\r\n " +descending(tableau2valeur)+"\r\n");

const charchain = "flidfgazjkepazsadhihd";
console.log("8. \n\r Cette chaîne de caractères '"+charchain+"' va avoir ces voyelles en mauscules.. \n\r" + getVowelUp(charchain)+"\r\n")

const charchain2 = "Bonjour, j'ai beaucoup de voyelles."
console.log("9. \n\r Cette chaîne de caractères '"+charchain2+"' a "+getNumberVowel(charchain2) +" voyelles. \n\r")

const charUpChain = "aminomethylpyrimidinylhydroxyethylmethythiazolium"
console.log("10. \n\r Cette chaîne de caractères '"+charUpChain+"' va avoir ces consonnes en mauscules.. \n\r" + getConsonantUp(charUpChain)+"\r\n")

