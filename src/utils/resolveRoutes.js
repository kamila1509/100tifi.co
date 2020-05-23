const resolveRoutes = (route) => {
    if (route.includes('character/')){
        let validRoute ='/character/:id';
        return validRoute
    }
    if (route.includes('location/')){
        let validRoute ='/location/:id';
        return validRoute
    }
    else if(route.length <= 3){
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
};

export default resolveRoutes