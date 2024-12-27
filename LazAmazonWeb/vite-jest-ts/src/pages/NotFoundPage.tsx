import { FunctionComponent } from "react";
import { useNavigate } from "react-router";

interface NotFoundPageProps {}

const NotFoundPage: FunctionComponent<NotFoundPageProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        className="bi bi-exclamation-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
      </svg>
      <h1 className="my-3 mb-5">Page Not Found</h1>
      <p>The page you are looking for is not found.</p>
      <p className="mx-5 text-center">
        It's possible the URL in your browser is incorrect or the page doesn't
        exist.
      </p>
      <button className="btn text-primary" onClick={() => navigate("/")}>
        Go home
      </button>
    </div>
  );
};

export default NotFoundPage;
