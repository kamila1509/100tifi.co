import {API} from "./api";
const getDataId = async (id) => {
    const apiURL = id ? `${API}/${id}` : `${API}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Fetch Error',error);
    };
};


export default getDataId;