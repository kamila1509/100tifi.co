import getData from '../utils/getData';
const Location = async () => {
    let id = location.hash.slice(1).toLocaleLowerCase().split('/')[2];
    const Locations = id? await getData('location',id) :await getData('location');
    let beforePage = Locations.info.prev? Locations.info.prev.split('=')[1] : ''
    let buttonbefore = beforePage ? 'Before Page' : ''
    let nextPage = Locations.info.next? Locations.info.next.split('=')[1] : ''
    let buttonNext = nextPage ? 'Next Page' : 'First Page'
    const view =`
    <div class="Characters">
    ${Locations.results.map(location =>`
        <article class="Characters-item">
            <a href="#/location/${location.id}">
            <h2>Location: ${location.id}</h2>
            <h2>Name: ${location.name}</h2>
            <h2>Type: ${location.type}</h2>
            <h2>Dimension: ${location.dimension}</h2>
            </a>
        </article>
        `).join('')}
    </div>
    <div class="Pagination">
    <a id="beforePage" href="#/all-locations/${beforePage}">${buttonbefore}</a>
    <a id="nextPage" href="#/all-locations/${nextPage}">${buttonNext}:${nextPage}</a>
    </div>
    `;
    return view;
};
export default Location;