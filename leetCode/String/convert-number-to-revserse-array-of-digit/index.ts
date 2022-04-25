const digizitize = (n:number) :number[]=> n.toString(10).split("").map(Number).reverse();

console.log(digizitize(5612)); //[2165]
