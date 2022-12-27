const API_URL = 'https://api.themoviedb.org'
export const ServiceAPI = {
    search,
    getMovieById,
    searchMovie,
    searchNowPlaying,
    searchTopRate
};

const api_key = 'a633a16acb6384941685fbceba0ed186'

function search(page) {
    return fetch(`${API_URL}/3/movie/popular?page=${page}&api_key=${api_key}`).then(handleResponse);
}

function searchMovie(query, page) {
    return fetch(`${API_URL}/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`).then(handleResponse);
}

function getMovieById(id) {
    return fetch(`${API_URL}/3/movie/${id}?api_key=${api_key}`).then(handleResponse);
}
function searchNowPlaying(page) {
    return fetch(`${API_URL}/3/movie/now_playing?api_key=${api_key}&page=${page}`).then(handleResponse);
}
function searchTopRate(page) {
    return fetch(`${API_URL}/3/movie/top_rated?api_key=${api_key}&page=${page}`).then(handleResponse);
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            return Promise.reject(data);
        }
        return data;
    });
}
