import getHash from '../utils/getHash';
import getDataId from '../utils/getDataId';
import getCharacters from '../utils/getCharacters'
const Residents = async () => {
    const id = getHash();
    const Location = await getDataId(id);
    const residents = await getCharacters(id,'residents');
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <h2>Name Location: ${Location.name}</h2>
            <h2>Type: ${Location.type} </h2>
            <h2>Dimension: ${Location.dimension} </h2>
        </article>
        <article>
        <h2>Residents: </h2>
        ${residents.length > 0 ? `<div class="Characters">
            ${residents.map(resident => `
            <a href="#/character/${resident.id}">
            <article class="Characters-card">
                <img src="${resident.image}" alt="name">
                <h2>${resident.name}</h2>
            </article>
            </a>
            `).join('')}
        </div>`: 'There is no residents in this Location'}
        <article>
    </div>
    `;
    return view;
    
    
}

export default Residents