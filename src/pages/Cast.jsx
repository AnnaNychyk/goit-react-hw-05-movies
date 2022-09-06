import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'shared/service/api';
import noPhoto from '../images/noPhoto.jpg';

const Cast = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieCredits(movieId);

        setState(prevState => {
          return {
            ...prevState,
            items: result.cast,
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
    fetchMovieCredits();
  }, [setState, movieId]);

  const { items } = state;
  const getActor = items.map(item => (
    <li key={item.id}>
      <img
        width="100px"
        src={
          item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : noPhoto
        }
        alt={item.name}
      />
      <p>{item.name}</p>
      <p>Character: {item.character}</p>
    </li>
  ));

  return <ul>{getActor}</ul>;
};

export default Cast;
