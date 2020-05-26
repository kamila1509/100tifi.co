import {API} from "./api";
const getData = async (type,id = 1) => {
    const apiURL = id ? `${API}/${type}/?page=${id}` : `${API}/${type}/`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error',error);
    };
};


export default getData;