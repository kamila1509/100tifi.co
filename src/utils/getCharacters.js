import getUrl from './getUrl'
import getDataId from './getDataId'

const getCharacters = async (location,character) => {
   const locations = await getDataId(location);
   const residents = locations[character];
   let results = residents.map(async (item) => {
       return await getUrl(item)
   })
   return Promise.all(results)
    .then(results => {
        return results
    })
};

export default getCharacters