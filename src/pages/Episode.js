import getHash from '../utils/getHash';
import getDataId from '../utils/getDataId';
import getCharacters from '../utils/getCharacters';
const Episode =  async () => {
    const id = getHash();
    const episode = await getDataId(id);
    const characters = await getCharacters(id,'characters');
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <h2>${episode.id}.${episode.name}</h2>
            <h2>Air Date: ${episode.air_date}</h2>
            <h2>Episode: ${episode.episode}</h2>
        </article>
        <article>
        <h2>Characters: </h2>
        ${characters.length > 0 ? `<div class="Characters">
            ${characters.map(character => `
            <a href="#/character/${character.id}">
            <article class="Characters-card">
                <img src="${character.image}" alt="name">
                <h2>${character.name}</h2>
            </article>
            </a>
            `).join('')}
        </div>`: 'There is no characters in this Location'}
        <article>
    </div>
     `
     return view;
};

export default Episode