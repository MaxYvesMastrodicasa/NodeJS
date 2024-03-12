export const subVowels = (iAmString) => {
  const noVowels = iAmString.replace(/[aeiouy]/gi, "");
  return noVowels;
};

export const dicoMode = (arrayString) => {
    return arrayString.sort();
};

export const getVowelUp = (phrase) => {
    return phrase.replace(/[aeiouy]/g,function(upper){
      return upper.toUpperCase();
    });
}

export const getConsonantUp = (phrase) => {
  return phrase.toUpperCase().replace(/[AEIOUY]/gi,function(lower){
    return lower.toLowerCase();
  });
}

export const getNumberVowel = (phrase) => {
  return phrase.split('').filter( v => "aeiouy".includes(v.toLowerCase())).length;
}

const getNumberVowel2 = (sentence) =>{
  return sentence.match(/[aeiouy]/gi).length;
}

export const letterizer = (numberletter) => {
  if (isNaN(numberletter) || numberletter < 0 || 999 < numberletter) {
    return "Veuillez entrer un nombre entier entre 0 et 999 inclus.";
  }
//set array with number matches with them places
  const unitLetter = [
    "",
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf",
  ];
  const dozenLetter = [
    "",
    "dix",
    "vingt",
    "trente",
    "quarante",
    "cinquante",
    "soixante",
    "soixante",
    "quatre-vingt",
    "quatre-vingt",
  ];
  let unitConverted = null;
  let dozenConverted = null;
  let hundredConverted = null;
//modulo to get unit, dozen and hundred
  const unit = numberletter % 10;
  const dozen = ((numberletter % 100) - unit) / 10;
  const hundred = ((numberletter % 1000) - (numberletter % 100)) / 100;

//Check 0
  if (numberletter === 0) {
    return "zéro";
  } else {

//Convert units
    unitConverted =
      (unit === 1 && dozen > 1 && dozen !== 8 ? "et-" : "") + unitLetter[unit];
//Convert dozen
    if (dozen === 1 && unit > 0) {
      dozenConverted = unitLetter[10 + unit];
      unitConverted = "";
    } else if (dozen === 7 || dozen === 9) {
      dozenConverted =
        dozenLetter[dozen] +
        "-" +
        (dozen === 7 && unit === 1 ? "et-" : "") +
        unitLetter[10 + unit];
      unitConverted = "";
    } else {
      dozenConverted = dozenLetter[dozen];
    }

    dozenConverted += unit === 0 && dozen === 8 ? "s" : "";

//Convert hundred
    hundredConverted = (hundred > 1 ? unitLetter[hundred] + '-' : '') + (hundred > 0 ? 'cent' : '') + (hundred > 1 && dozen === 0 && unit === 0 ? 's' : '');

    return (
      hundredConverted + (hundredConverted && dozenConverted ? '-' : '') + dozenConverted + ((hundredConverted && unitConverted) || (dozenConverted && unitConverted) ? '-' : '') +unitConverted);
  }
};

