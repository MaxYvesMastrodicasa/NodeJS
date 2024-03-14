export const getAllArray = (array1) =>{
    const iterator = array1.values();
    for (const value of iterator) {
        console.log(value);
    }
}

export const getDayArray = (dayNumber) =>{
    const array2 = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    if (0<dayNumber<8){
        return array2[dayNumber-1];
    }
    else{
        return "Veuillez saisir un Chiffre entre 1 et 7 inclues"
    }
}

export const getSumArray = (numArray) =>{
    let sum = 0;
    for (let i = 0; i < numArray.length; i++ ) {
        sum += numArray[i];
    }
    return sum
}

export const getAddArray = (anyArray,add2Array) => {
    anyArray.push(add2Array);
    return anyArray;
}

export const extractKey = (arr,key) =>{
    const newarray = arr.map((obj)=>{
        return obj[key];
    })
} 