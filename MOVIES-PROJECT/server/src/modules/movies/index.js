const axios = require('axios');
const { API_KEY } =  require('../../config')

const getPopular =async () => { 
   
        const result = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return result.data;
}

module.exports = {
    getPopular
}


