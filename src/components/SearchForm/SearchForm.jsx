import { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({
      query: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        name="query"
        value={state.query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
