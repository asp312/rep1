let myArray = [3, 7, 2, 9];

const minar = () => {
    let z = Math.min(...myArray);
    console.log(z);
};




function sum(a) {

    let currentSum = a;
    function f(b) {
      currentSum += b;
      return f;
     }
    f.toString = function() {
      return currentSum;
     };
    return f;
  }
  
 console.log(sum(1)(2));



function rev(){
    let str = Hello;
    let newStr = str.split('').revers().join('');
    return newStr;
} ;
function rev2 (){
    let arr = ["hello", "world"]
    arr.reverse;
    arr.forEach (() => {
        rev();
    })
}


let res = [];
const fib = (n) => {
    let i = 0;
    while (i<n){
        i++;
    }
    return i;
};
res.find(id==i);