import { FunctionComponent, useEffect, useState } from "react";
import { useLocation } from "react-router";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const location = useLocation();
  const baseUrl = "/";
  const [isLandingPage, setisLandingPage] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname === baseUrl) {
      setisLandingPage(true);
    } else {
      setisLandingPage(false);
    }
  }, [document.URL]);

  return (
    <div className="container sticky-top p-2 vw-100 bg-light">
      <div className="input-group justify-between align-items-center">
        {/* todo: make this button appear only on paths inside landing page ie product & shop page, etc */}
        {!isLandingPage && (
          <button
            style={{ width: "40px", height: "37.6px" }}
            className="d-flex justify-center align-items-center border-0 bg-white"
            type="button"
            id="back-button"
            onClick={() => {}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </button>
        )}
        <input
          type="text"
          className="form-control border-end-0"
          placeholder="Looking for something?"
          aria-label="Looking for something?"
          aria-describedby="button-addon2"
        />
        <button
          style={{ width: "40px", height: "37.6px" }}
          className="d-flex align-items-center border-0 border-top border-bottom bg-white"
          type="button"
          id="button-picture-search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="25"
            fill="currentColor"
            className="bi bi-camera"
            viewBox="0 0 16 16"
          >
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
          </svg>
        </button>
        <button
          className="btn btn-outline-secondary bg-danger bg-gradient text-white"
          type="button"
          id="button-search"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
