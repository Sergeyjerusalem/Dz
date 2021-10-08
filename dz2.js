/*let arr = [1,2,3,4,5,6,7,8];

foo ();

function foo(){
    console.log(arr.reverse());
    
}*/

/* let arr = [33,456,21,67,312]
let max = 0;

arr.forEach(function(el) {
    if (max<el){
        max = el;
        return max;
    }

})

    console.log (max);*/


/* let arr = [0,1];


   function foo(n) {
   if (n == 1) {
     return arr;
   } else {
      arr = foo(n - 1);
     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
     return arr;
   }
 }; 
 
 console.log(foo(19));*/

/*let arr1 = Array.from('3487');
let arr2 = Array.from('3494');
let part = 0;
let full = 0;

arr1.forEach(function(el,i){
arr2.forEach(function(el2,j){
    if (el===el2){
        part++;
        
    }
    if (i===j && el===el2){
        full++;
    }
})

})
            
      console.log(full);  
      console.log(part);
*/

/* let num = [9, 2, 5, 6, 13];
num.sort(function(a, b) {
return b - a; // a - b по возрастанию
});
console.log (num);*/




/*let arr = [7,8,3,1,1,3,8,9,4,9,7];

let res = arr.filter(function(el,i){
    return arr.indexOf(el) === i;
})

console.log(res);*/







