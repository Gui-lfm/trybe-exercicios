function addProducts<Type>(products: Type[], newProduct: Type): Type[] {
  return [...products, newProduct];
}

type Bread = {
  name: string,
  ingredients: string[],
  gluten: boolean,
};

type Flour = {
  brand: string,
  description: string,
  gluten: boolean,
};

const breads: Bread[] = [];
const flours: Flour[] = [];

const newBread: Bread = {
  name: "Pão de banana",
  ingredients: ['farinha de aveia sem glúten', 'bananas maduras', 'nozes', 'ovos', 'mel'],
  gluten: false,
};

const newFlour: Flour = {
  brand: "Dona Benta",
  description: "Farinha de trigo enriquecida com ferro e ácido fólico.",
  gluten: true,
};

const bread = addProducts<Bread>(breads, newBread); 
const flour = addProducts<Flour>(flours, newFlour); 

console.log('bread', bread);
console.log('flour', flour);