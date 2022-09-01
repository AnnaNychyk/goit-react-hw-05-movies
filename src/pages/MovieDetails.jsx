import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'shared/service/api';

const MovieDetails = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

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
            item: result,
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

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { title, poster_path, overview, genres } = state.item;

  return (
    <>
      <button className="goBack" onClick={goBack} type="button">
        Go back
      </button>
      <div className="details">
        <img className="poster" src={poster_path} alt="" />
        <div className="info">
          <h2>{title}</h2>
          <p>User Score: </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
