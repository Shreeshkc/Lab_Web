//Arrow function 
const fruits = ['apple', 'banana','mango'];

console.log(fruits);

for(const fruit of fruits)
    console.log(fruit);

const displayOdd = (fruits) => {
    for(let i = 0; i < fruits.length; i++){
        if(i % 2 !== 0)   // odd indices
            console.log(fruits[i]);
    }
}

displayOdd(fruits); 

//Filter Usage- Array bata elements haru condition anushar filter garera diney
numbers=[1,2,3,34,55,23,21]
numbers.filter((e)=>{
   if(e>20)
    console.log(e)
})
dta = numbers.filter(i => i<20)
console.log(dta)

fruits.filter ((e , i)=>{
    if(i%2 ==0){
       console.log(e)
    }
})
//spread Operator

console.log(...fruits, ...numbers)

