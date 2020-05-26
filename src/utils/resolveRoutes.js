const resolveRoutes = (route) => {
    if (route.includes('character/')){
        let validRoute ='/character/:id';
        return validRoute
    }
    if (route.includes('location/')){
        let validRoute ='/location/:id';
        return validRoute
    }
    if(route.includes('all-locations')){
        let validRoute = '/all-locations/:id';
        return validRoute
    }
    if(route.includes('all-episodes')){
        let validRoute = '/all-episodes/:id';
        return validRoute
    }
    if(route.includes('episode/')){
        let validRoute = '/episode/:id';
        return validRoute
    }
    else if(route.length <= 3){
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
};

export default resolveRoutes