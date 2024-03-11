export const divide = (a, b) => {
    if (b === 0){
        return "Attempted to divided by 0. Please try again.";
    }
    return a/b;
}

export const add = (a,b) => a + b;
export const sub = (a,b) => a - b;
export const mulitply = (a,b) => a * b;
export const greatest = (arrayNum) => Math.max(...arrayNum);
