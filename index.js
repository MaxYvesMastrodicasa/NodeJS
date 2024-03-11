import {divide , add, greatest} from "./src/utils/math.js";
import { dicoMode, letterizer, subVowels } from "./src/utils/litteral.js";

const a = 45;
const b = 42;  
console.log("1. \n\r "+a+" + "+b+" = " + add(a,b)+"\n\r")

const tableau = [1,45,23,98,16,4852,19,37];
console.log("2. \n\r Le plus grand nombre du tableau suivant : \n\r"+ "tableau = "+tableau+"\n\r est : "+greatest(tableau)+"\n\r")

const sentence = "Je n'est pas de voyelle";
console.log("3. \n\r La phrase suivante : "+sentence+"\n\r sans voyelles : "+subVowels(sentence)+"\n\r");

const sortMe = ["bonjour", "avocat", "zèbre", "marche", "wagon"];
console.log("4. \n\r La liste suivante sera triée par ordre alphabétique : \n\r Avant : "+sortMe+"\n\r Après : "+dicoMode(sortMe)+"\n\r");

const userAnswer = 979;
console.log("5.\n\r Un nombre est inscrit en dur, s'il ne vous plait pas changez le.. \n\r "+userAnswer+" : "+letterizer(userAnswer)+"\n\r");

