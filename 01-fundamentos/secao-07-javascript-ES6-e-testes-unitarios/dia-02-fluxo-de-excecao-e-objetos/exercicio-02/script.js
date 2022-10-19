const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const arrayOrder = Object.values(order);

  const deliveryPerson = arrayOrder[3]["delivery"]["deliveryPerson"];
  const customer = arrayOrder[0];
  const phone = arrayOrder[1];
  const street = arrayOrder[2]["street"];
  const streetNumber = arrayOrder[2]["number"];
  const apartmentNumber = arrayOrder[2]["apartment"];

  const message = `Olá ${deliveryPerson}, entrega para: ${customer}, Telefone: ${phone}, R. ${street}, Nº: ${streetNumber}, AP: ${apartmentNumber}.`;

  return message;
};

const message = customerInfo(order);

const orderModifier = (order) => {
  order['name'] = 'Luiz Silva';
  order['payment']['total'] = 50;
  
  const arrayOrder = Object.values(order);
  const drink = arrayOrder[3]['drinks']['coke']['type'];
  const pizzas = Object.keys(arrayOrder[3]['pizza'])
  
  const message = `Olá ${arrayOrder[0]}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${arrayOrder[4]['total']},00.`

  return message;
};

console.log(orderModifier(order));

