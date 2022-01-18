/*
Notinces how the this object change if its used in a normal function or an arrow function
*/

const obj = {
    functionNormal: function(){
        console.log('This normal function',this);
    },
    functionArrow: () => {
        console.log('This arrow function', this);
    }
}

console.log('This of the environment',this);
obj.functionNormal();
obj.functionArrow();