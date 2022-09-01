import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <button className="goBack" onClick={goBack} type="button">
        Go back
      </button>
      <h1>Page not found</h1>
    </>
  );
};

export default NotFound;
