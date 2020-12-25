import template from "../templates/item.hbs";

export default {
    query: 'Ocean',
    page: 3,
    perPage: 15,
    baseUrl: 'https://api.pexels.com/v1',

    get queryValue() {
        return this.query;
    },
    set queryValue(val) {
        return (this.query = val);
    },
  
    getFetch(val, place) {
        const key = "563492ad6f917000010000017b458bfb16584f9db94dcfa825f22d81";
        this.queryValue = val;
        const param = `/search?query=${this.query}`;
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
                place.insertAdjacentHTML("afterbegin", items);
                return place;
            });
    }
}
