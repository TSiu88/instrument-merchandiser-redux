import instrumentListReducer from '../../reducers/instrument-list-reducer';
import { v4 } from 'uuid';

describe('instrumentListReducer', () => {

  const firstId = v4();
  const secondId = v4();
  const currentState = {
    [firstId]: {
      id: firstId,
      category: "Piano",
      itemName: "El Piano",
      description: "hard-coded piano",
      price: 899.99,
      quantity: 0,
      image:
        "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
    },
    [secondId]: {
      id: secondId,
      category: "Guitar",
      itemName: "The Guitarrro",
      description: "hard-coded guitar",
      price: 199.99,
      quantity: 3,
      image:
        "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png"
    }
  }
  
  let action;
  const instrumentData = {
    id: v4(),
    category: "Guitar",
    itemName: "The Guitarrro",
    description: "hard-coded guitar",
    price: 199.99,
    quantity: 3,
    image:
      "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png"
  };

  test('Should return default state if no action type passed into the reducer', () => {
    expect(instrumentListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new instrument data to masterInstrumentList', () => {
    const { id, category, itemName, description, price, quantity, image } = instrumentData;
    action = {
      type: 'ADD_INSTRUMENT',
      id: id,
      category: category,
      itemName: itemName,
      description: description,
      price: price,
      quantity: quantity,
      image: image
    };

    expect(instrumentListReducer({}, action)).toEqual({
      [id] : {
        id: id,
        category: category,
        itemName: itemName,
        description: description,
        price: price,
        quantity: quantity,
        image: image
      }
    });
  });
  
  test('Should successfully delete an instrument', () => {
    action = {
      type: 'DELETE_INSTRUMENT',
      id: firstId
    };
    expect(instrumentListReducer(currentState, action)).toEqual({
      [secondId]: {
        id: secondId,
        category: "Guitar",
        itemName: "The Guitarrro",
        description: "hard-coded guitar",
        price: 199.99,
        quantity: 3,
        image:
          "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png"
      }
    });
  });

  test('Should successfully update an instrument data', () => {
    action = {
      type: 'ADD_INSTRUMENT',
      id: firstId,
      category: "Cello",
      itemName: "String-a-llo",
      description: "hardwood bass cello",
      price: 239.99,
      quantity: 3,
      image: "https://i1.wp.com/www.princemusiccompany.com/wp-content/uploads/2018/02/Strumenti-105-cello-3-PNG.png?fit=938%2C938&ssl=1"
    };
    expect(instrumentListReducer(currentState, action)).toEqual({
      [firstId]: {
        id: firstId,
        category: "Cello",
        itemName: "String-a-llo",
        description: "hardwood bass cello",
        price: 239.99,
        quantity: 3,
        image: "https://i1.wp.com/www.princemusiccompany.com/wp-content/uploads/2018/02/Strumenti-105-cello-3-PNG.png?fit=938%2C938&ssl=1"
      },
      [secondId]: {
        id: secondId,
        category: "Guitar",
        itemName: "The Guitarrro",
        description: "hard-coded guitar",
        price: 199.99,
        quantity: 3,
        image:
          "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png"
      }
    });
  });
});