import { FunctionComponent, useState } from "react";
import Header from "../components/Header.tsx";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  const [currentSlide, setCurrentSlide] = useState("A");

  const changeSlide = (e: Event, isNext: boolean) => {
    e.preventDefault();
    if (!isNext) {
      if (currentSlide === "A") {
        setCurrentSlide("C");
      } else if (currentSlide === "B") {
        setCurrentSlide("A");
      } else if (currentSlide === "C") {
        setCurrentSlide("B");
      }
    } else {
      if (currentSlide === "A") {
        setCurrentSlide("B");
      } else if (currentSlide === "B") {
        setCurrentSlide("C");
      } else if (currentSlide === "C") {
        setCurrentSlide("A");
      }
    }
  };

  return (
    <>
      <Header />

      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide bg-dark"
          style={{ height: "200px" }}
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div
              className={`carousel-item ${currentSlide === "A" ? "active" : ""}`}
            >
              <img
                style={{ height: "200px" }}
                className="d-block w-100"
                src="../../../public/gifts.jpg"
                alt="First slide"
              />
            </div>
            <div
              className={`carousel-item ${currentSlide === "B" ? "active" : ""}`}
            >
              <img
                style={{ height: "200px" }}
                className="d-block w-100"
                src="../../../public/horizon.png"
                alt="Second slide"
              />
            </div>
            <div
              className={`carousel-item ${currentSlide === "C" ? "active" : ""}`}
            >
              <img
                style={{ height: "200px" }}
                className="d-block w-100"
                src="../../../public/chairs.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            onClick={(e) => changeSlide(e, false)}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            onClick={(e) => changeSlide(e, true)}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
