import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link className="goBack" to="/">
        Go back
      </Link>
      <h1>Page not found</h1>
    </>
  );
};

export default NotFound;
