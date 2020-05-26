import Header from '../templates/Header';
import Home from '../pages/Home';
import Location from '../pages/Location';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Residents from '../pages/Residents';
import Episodes_list from '../pages/Episodes-list';
import Episode from '../pages/Episode';

const routes = {
    '/':Home,
    '/character/:id':Character,
    '/all-locations/:id':Location,
    '/location/:id':Residents,
    '/all-episodes/:id':Episodes_list,
    '/episode/:id':Episode,
    '/:id':Home,
    
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    //header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
    
};
export default router;