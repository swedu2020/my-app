const multiply = (a,b)=>a*b;
const add = (a,b)=>a+b;
const multiplyX = x => a => multiply(a, x);
const addX = x => a => add(x, a);
const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

function compose(funcArr){
    return funcArr.reduce(
        function(prevFunc, nextFunc){
            return function(value){
                return nextFunc(prevFunc(value));
            }
        },
        function(k){return k}
    );
}
const formulaWithCompose 
     = compose([multiplyTwo, multiplyThree, addFour]);



function compose2(){
    const funcArr = Array.prototype.slice.call(arguments);
    return funcArr.reduce(
        function(prevFunc, nextFunc){
            return function(value){
                return nextFunc(prevFunc(value));
            }
        },
        function(k){return k}
    );
}
const formulaWithCompose2 
     = compose2(multiplyTwo, multiplyThree, addFour);