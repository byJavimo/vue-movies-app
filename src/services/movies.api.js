import axios from 'axios';

const API_KEY = '9bdfd02f7abd16e3a0a2f09af3e08715';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p';
export function getMovies() {
    return axios.get(
        `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=es-ES`
    );
}

export function getMovieDetail(id) {
    return axios.get(
        `${BASE_URL}movie/${id}?api_key${API_KEY}&language=es-ES`
    );
}


export function getSimilarMovies(id) {
    return axios.get(
        `${BASE_URL}movie/${id}/similar?api_key=${API_KEY}&language=es-ES`
    );
}