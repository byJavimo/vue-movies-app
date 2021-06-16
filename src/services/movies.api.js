import axios from 'axios';

const API_KEY = 'd4bd9de406msh0c0c275d163d82bp1532f5jsnb95700bf0dc4';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p';
export function getMovies() {
    return axios.get();
}

export function getMovieDetail(id) {
    return axios.get();
}


export function getSimilarMovies(id) {
    return axios.get();
}