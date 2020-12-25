import css from "./css/styles.css";
import fetch from './js/fetch.js';
import refs from "./js/refs.js";
// import libs from './js/libs.js';

const { form, gallery } = refs;

form.addEventListener("submit", (e) => {
  e.preventDefault();
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.elements);
//   console.log(e.target.elements.query);
//   console.log(e.target.elements.query.value);
  const inputValue = e.target.elements.query.value;
  fetch.getFetch(inputValue, gallery);
});