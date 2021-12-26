const orders = [
  {
    name: "iPhone 7",
    price: 10,
    count: 2,
  },
  {
    name: "iPad 2",
    price: 10,
    count: 1,
  },
  {
    name: "Macbook Pro",
    price: 10,
    count: 5,
  },
  {
    name: "Kindle Osis",
    price: 10,
    count: 2,
  },
];

const result = orders.reduce(
  (acc, product) => acc + product.price * product.count,
  0
);

console.log(result);
