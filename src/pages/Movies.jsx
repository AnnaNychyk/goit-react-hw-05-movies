import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { getSearchMovies } from 'shared/service/api';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getSearchMovies(query);

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

    if (query) {
      fetchSearchMovies();
    }
  }, [query]);

  const changeSearch = ({ query }) => {
    setSearchParams({ query });
  };

  const { items } = state;

  return (
    <>
      <SearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
    </>
  );
};

export default Movies;
