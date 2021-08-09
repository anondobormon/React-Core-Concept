import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("h1", null, "Hello Bangladesh!");

// JavaScript to JSX
const element = (
  <h1 className="header">
    <span className="text">Hello Bangladesh!</span>
  </h1>
);
console.log(element);

ReactDOM.render(element, document.getElementById("root"));

/*
JavaScript Object
element = {
  type: h1,
  props: {
    className: "header",
    children: {
      type: "span",
      props: {
        className: "text",
        children: "Hello Bangladesh!",
      },
    },
  },
};*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
