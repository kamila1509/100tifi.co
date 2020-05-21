import getData from '../utils/getData';
const Home = async () =>{
    const Characters = await getData();
    const view = `
    <div class="Characters">
        ${Characters.results.map(character =>`
        <article class="Characters-item">
            <a href="#/${character.id}">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            </a>
        </article>
        `).join('')}
    </div>
    <div class="Pagination">
    <a href="#/page/3">Next Page</a>
    </div>
    `;
    return view
};

export default Home