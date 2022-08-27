import { Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu/Menu';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import './shared/styles/styles.css';

const App = () => {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<h1>MovieDetails</h1>}>
          <Route path="cast" element={<h1>Cast</h1>} />
          <Route path="reviews" element={<h1>Reviews</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
