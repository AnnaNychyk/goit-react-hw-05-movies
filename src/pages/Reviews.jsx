import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'shared/service/api';

const Reviews = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getMovieReviews(movieId);

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
    fetchMovieReviews();
  }, [setState, movieId]);

  const { items } = state;

  const reviews = items.map(item => (
    <div key={item.id}>
      <h3>{item.author}</h3>
      <p className="review">{item.content}</p>
    </div>
  ));

  return (
    <>
      {items.length > 0 ? (
        reviews
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
