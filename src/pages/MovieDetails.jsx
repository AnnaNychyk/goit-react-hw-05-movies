import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'shared/service/api';
import noPoster from '../images/noPosterAvailable.jpg';

const MovieDetails = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieDetails(movieId);

        setState(prevState => {
          return {
            ...prevState,
            items: result,
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };
    fetchMovieDetails();
  }, [setState, movieId]);

  const {
    title,
    poster_path,
    overview,
    genres = [],
    vote_average,
  } = state.items;

  const img = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : noPoster;

  const userScore = Math.round((vote_average / 10) * 100);

  const getGenres = genres.map(({ name }) => name).join(', ');

  return (
    <>
      <button className="goBack" onClick={goBack} type="button">
        Go back
      </button>
      <div className="details">
        <img className="poster" src={img} alt="" />
        <div className="info">
          <h2>{title}</h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{getGenres}</p>
        </div>
      </div>
      <div className="moreInfo">
        <p>Additional information</p>
        <ul className="castReviews">
          <li>
            <Link state={{ from }} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
