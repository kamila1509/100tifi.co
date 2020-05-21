import getHash from "./getHash";
import {API} from "./api";
const getData = async (id) => {
    const apiURL = id ? `${API}/character/${id}` : `${API}/character`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error',error);
    };
};

export default getData;