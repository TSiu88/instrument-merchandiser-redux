import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux';
import reducer from './reducers/instrument-list-reducer';
import { Provider } from 'react-redux';
import { v4 } from 'uuid';

/* Seed Data */
const firstId = v4();
const secondId = v4();
const thirdId = v4();
const fourthId = v4();
const fifthId = v4();
const sixthId = v4();
const initialInstrumentList = {
  [firstId] : {
    id: firstId,
    category: "Guitar",
    itemName: "The Guitarrro",
    description: "hard-coded guitar",
    price: 199.99,
    quantity: 3,
    image:
      "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png",
  },
  [secondId] : {
    id: secondId,
    category: "Piano",
    itemName: "El Piano",
    description: "hard-coded piano",
    price: 899.99,
    quantity: 0,
    image:
      "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
  },
  [thirdId] : {
    id: thirdId,
    category: "Saxophone",
    itemName: "The In-Stocksophone",
    description: "this is an example of an in-stock item",
    price: 699.99,
    quantity: 8,
    image:
      "https://cdn.shoplightspeed.com/shops/612125/files/5871002/image.jpg",
  },
  [fourthId] : {
    id: fourthId,
    category: "Piano",
    itemName: "El Piano Dos",
    description: "hard-coded piano",
    price: 899.99,
    quantity: 1,
    image:
      "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
  },
  [fifthId] : {
    id: fifthId,
    category: "Guitar",
    itemName: "The Guitarrito",
    description: "hard-coded guitar",
    price: 199.99,
    quantity: 3,
    image:
      "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png",
  },
  [sixthId] : {
    id: sixthId,
    category: "Saxophone",
    itemName: "The Out-of-Stocksophone",
    description: "this is an example of an out-of-stock item.  It's over 9000!",
    price: 9000.99,
    quantity: 0,
    image:
      "https://cdn.shoplightspeed.com/shops/612125/files/5871002/image.jpg",
  },
};

const store = createStore(reducer, initialInstrumentList);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
