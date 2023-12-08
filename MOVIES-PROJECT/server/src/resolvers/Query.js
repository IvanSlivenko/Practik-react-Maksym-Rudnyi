function movies(parent, args) {
    return {
    page: 1,
    totalResult: 10,
    totalPage:10,
        result: [{
            id: 1, 
            title: 'Movie title',
            releaseDate: 'release Date',
            posterPath: ''
        }]
    }
}

module.exports = {
  movies,
};
