import getData from '../utils/getData';
const Home = async () =>{
    let id = Number(location.hash.slice(1).toLocaleLowerCase().split('/')[1]);
    const Characters = id? await getData('character',id) :await getData('character');
    let beforePage = Characters.info.prev? Characters.info.prev.split('=')[1] : ''
    let buttonbefore = beforePage ? 'Before Page' : ''
    let nextPage = Characters.info.next? Characters.info.next.split('=')[1] : ''
    const view = `
    <div class="Characters">
        ${Characters.results.map(character =>`
        <article class="Characters-item">
            <a href="#/character/${character.id}">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            </a>
        </article>
        `).join('')}
    </div>
    <div class="Pagination">
    <a id="beforePage" href="#/${beforePage}">${buttonbefore}</a>
    <a id="nextPage" href="#/${nextPage}">Next Page: ${nextPage}</a>
    </div>
    `;
    return view
};

export default Home