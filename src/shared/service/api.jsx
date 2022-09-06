import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'e236468c654efffdf9704cd975a74a96';

export async function getTrendingFilms() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}

export async function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}

export async function getMovieCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`;

  const { data } = await axios.get(url);
  return data;
}

export async function getMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;

  const { data } = await axios.get(url);
  return data;
}

export async function getSearchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`;

  const { data } = await axios.get(url);
  return data;
}
