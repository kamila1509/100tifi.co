import getData from '../utils/getData';
const Location = async () => {
    let id = Number(location.hash.slice(1).toLocaleLowerCase().split('/')[1]);
    const Locations = id? await getData('location',id) :await getData('location');
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
    `;
    return view;
};
export default Location;