import getData from "../utils/getData";

const Episodes_list = async () => {
    let id = location.hash.slice(1).toLocaleLowerCase().split('/')[2];
    const Episodes = id ? await getData('episode', id): await getData('episode');
    let nextPage = Episodes.info.next? Episodes.info.next.split('=')[1] : ''
    let buttonNext = nextPage ? 'Next Page' : 'First Page'
    const view = `
    <div class="Characters">
    ${Episodes.results.map(episode =>`
        <article class="Characters-item">
            <a href="#/episode/${episode.id}">
            <h2>${episode.id}.${episode.name}</h2>
            <h2>Air Date: ${episode.air_date}</h2>
            <h2>Episode: ${episode.episode}</h2>
            </a>
        </article>
        `).join('')}
    </div>
    <div class="Pagination">
    <a id="nextPage" href="#/all-episodes/${nextPage}">${buttonNext}${nextPage}</a>
    </div>`;
    return view
};

export default Episodes_list;