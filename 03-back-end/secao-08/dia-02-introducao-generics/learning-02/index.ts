type Product = {
  price: number,
  barcode: string
}

function getProduct(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 10,
  };
  return product;
}

console.log(getProduct());