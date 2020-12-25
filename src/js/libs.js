import { createClient } from 'pexels';
import refs from "./refs.js";
import template from '../templates/item.hbs';

const client = createClient('563492ad6f917000010000017b458bfb16584f9db94dcfa825f22d81');


// получение 1го объекта:
//=======================
// let query = "Ocean";
// client.photos.search(query, perPage=10).then(() => {
//     img.src = obj.src.original
// })

//получение количества объектов = значению per_page
let query = "cat";

client.photos.search({ query, per_page: 15 }).then((result) => {
//   console.log(result.photos);
  const items = template(result.photos);
  refs.gallery.insertAdjacentHTML("afterbegin", items);
});

