import css from "./css/styles.css";
// import fetch from './js/fetch.js';
import refs from "./js/refs.js";
// import libs from './js/libs.js';
import async from './js/async-fetch.js';

const { form, loadMoreBtn, gallery } = refs;

// для перехода на fetch: в функциях вызовы через async. заменить на fetch.

form.addEventListener("submit", (e) => {
    e.preventDefault();
  gallery.innerHTML = '';
  async.resetPage();

//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.elements);
//   console.log(e.target.elements.query);
//   console.log(e.target.elements.query.value);
    
  const inputValue = e.target.elements.query.value;
  async.getFetch(inputValue, gallery);
});

loadMoreBtn.addEventListener('click', () => {
  async.setPage();
  async.getFetch(undefined, gallery);
})