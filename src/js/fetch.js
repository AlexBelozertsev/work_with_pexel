import template from "../templates/item.hbs";
import refs from './refs.js';

export default {
    query: '',
    page: 1,
    perPage: 2,
    baseUrl: 'https://api.pexels.com/v1',

    get queryValue() {
        return this.query;
    },
    set queryValue(val) {
        return (this.query = val);
    },
    setPage() {
        return this.page += 1;
    },
    resetPage() {
        return this.page = 1;
    },
  
    getFetch(val = this.query, place) {
        const key = "563492ad6f917000010000017b458bfb16584f9db94dcfa825f22d81";
        this.queryValue = val;
        const param = `/search?query=${this.query}&per_page=${this.perPage}&page=${this.page}`;
        const URL = this.baseUrl + param;

        let options = {
                method: "GET",
                headers: {
                    Authorization: key,
                },
            };

        return fetch(URL, options)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                return data.photos;
            })
            .then((result) => {
                const items = template(result);
                place.insertAdjacentHTML("beforeend", items);
                refs.loadMoreBtn.style.opacity = 1;
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                })
                return place;
            });
    }
}
