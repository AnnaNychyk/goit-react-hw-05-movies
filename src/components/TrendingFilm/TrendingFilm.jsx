import { useState, useEffect } from 'react';
import { getTrendingFilms } from '../../shared/service/api';
import MovieList from '../MovieList/MovieList';

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

  return (
    <>
      {items.length > 0 && <MovieList items={items} />}
      {loading && <p>...load films</p>}
      {error && <p>...Films load failed</p>}
    </>
  );
};

export default TrendingFilms;
