import { FunctionComponent, useEffect, useState } from "react";
import Header from "../components/Header.tsx";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  const [currentSlide, setCurrentSlide] = useState("A");

  const changeSlide = (e: any, isNext: boolean) => {
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

  //

  const recentlyViewed = [
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/6623445/pexels-photo-6623445.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 1,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/7115332/pexels-photo-7115332.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 2,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/459830/pexels-photo-459830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 3,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/2745833/pexels-photo-2745833.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 4,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/3731266/pexels-photo-3731266.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 5,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/163185/pexels-photo-163185.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 6,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/1598503/pexels-photo-1598503.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 7,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/3751222/pexels-photo-3751222.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 8,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/4065808/pexels-photo-4065808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 9,
    },
    {
      price: 174.97,
      img: "https://images.pexels.com/photos/5953769/pexels-photo-5953769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150",
      key: 10,
    },
  ];

  //

  useEffect(() => {
    console.log("%c 2024.29.1", "color: blue; font-size: 20px;");
    // console.log(
    //   "%cHello %cWorld!",
    //   "color: red; font-size: 20px;",
    //   "color: blue; font-size: 20px;"
    // );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide === "A") {
        setCurrentSlide("B");
      } else if (currentSlide === "B") {
        setCurrentSlide("C");
      } else if (currentSlide === "C") {
        setCurrentSlide("A");
      }
    }, 5000);
  }, [currentSlide]);

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
                src="/gifts.jpg"
                alt="First slide"
              />
            </div>
            <div
              className={`carousel-item ${currentSlide === "B" ? "active" : ""}`}
            >
              <img
                style={{ height: "200px" }}
                className="d-block w-100"
                src="/horizon.png"
                alt="Second slide"
              />
            </div>
            <div
              className={`carousel-item ${currentSlide === "C" ? "active" : ""}`}
            >
              <img
                style={{ height: "200px" }}
                className="d-block w-100"
                src="/chairs.jpg"
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

        {/*  */}

        <div className="container px-0 my-2">
          <div className="container d-flex justify-content-between align-items-center px-0">
            <h2 className="fs-5">Recently Viewed</h2>
            <button type="button" className="btn " style={{ fontSize: "12px" }}>
              View more &gt;
            </button>
          </div>
          <div className="container d-flex overflow-auto">
            {recentlyViewed.map((rv) => (
              <button key={rv.key} className="btn p-0 me-2 d-flex flex-column">
                <img
                  src={rv.img}
                  // src="/store.png"
                  onError={(e) => {
                    // @ts-ignore
                    e.target.src = "/store.png";
                  }}
                  alt=""
                  srcSet=""
                  className="rounded"
                  style={{ height: "80px", width: "80px" }}
                />
                <span className="fs-6">P174.97</span>
              </button>
            ))}
          </div>
        </div>

        <div className="container p-5 m-5">
          <p>App is still in progress...</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
