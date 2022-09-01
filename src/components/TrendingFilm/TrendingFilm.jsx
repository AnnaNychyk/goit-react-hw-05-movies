import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingFilms } from '../../shared/service/api';

const TrendingFilms = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getTrendingFilms();

        setState(prevState => {
          return {
            ...prevState,
            items: result.results,
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
    fetchTrendingFilms();
  }, [setState]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      <ul>{elements}</ul>
      {loading && <p>...load films</p>}
      {error && <p>...Films load failed</p>}
    </>
  );
};

export default TrendingFilms;
