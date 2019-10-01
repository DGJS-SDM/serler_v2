import React from "react";
import ReactDOM from "react-dom";
//'Provider' là rổ để chứa toàn bộ redux
import { Provider } from "react-redux";
//'createStore' để tạo môi trường chứa các props của app
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//'reducer' đẩy data vào các props
import rootReducer from "./reducers";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//tạo một cái 'store', mà để tạo được store này thì cần truyền biến 'rootReducer' - để chứa
//tất cả reducer
const store = createStore(rootReducer, applyMiddleware(thunk));
//hãy render ra 1 app mà trong đó có 1 rổ producers. Mà cái rổ này lấy dữ liệu từ props thuộc cái
//store được tạo ở trên
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//cách tạo file index.js
//b1: khai báo tất cả các hàm, thư viện,... sẽ sử dụng trong app
//b2: tạo ra 1 store của redux
//b3: render cái redux vừa tạo với provider của store tương ứng vừa tạo
//b4: quăng app vào redux
