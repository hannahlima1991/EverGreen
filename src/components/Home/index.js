import React from "react";
import "./Home.css";
import hybrid from "../assets/hybrids.jpg";
import indica from "../assets/indica.jpg";
import sativa from "../assets/sativa.jpg";

function Home(props) {
  return (
    <div className="App">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
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
            <div className="carousel-item active">
              <a
                target="_blank"
                href="https://www.leafly.com/news/cannabis-101/sativa-indica-and-hybrid-differences-between-cannabis-types"
              >
                <img
                  src="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY3NTM5MzU5NjMxMzUzNzQy/what-is-thc-experts-weigh-in-on-benefits-and-effects.png"
                  className="d-block w-100"
                  alt="firstSlide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Indica or Sativa, what should I choose?</h1>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a
                target="_blank"
                href="https://www.leafly.com/news/strains-products/top-100-marijuana-strains"
              >
                <img
                  src="https://images.herb.co/wp-content/uploads/2018/03/Screen-Shot-2018-03-08-at-4.23.59-PM.jpg?auto=format&fit=clip&q=60&ixlib=react-8.6.4&w=1200"
                  className="d-block w-100"
                  alt="pot"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Top 100 Cannabis Strains To Try.</h1>
                </div>
              </a>
            </div>
            <div className="carousel-item">
              <a
                target="_blank"
                href="https://www.health.com/condition/pain/what-is-cbd"
              >
                <img
                  src="https://i2.wp.com/truetrae.com/wp-content/uploads/2018/04/best-cannabis-products-cbd-hemp.png?fit=1200%2C628&ssl=1"
                  className="d-block w-100"
                  alt="cbd oil"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>All You Need To Know About CBD.</h1>
                </div>
              </a>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-4 option">
            <div
              className="card"
              onClick={() => {
                props.history.push("/sativas");
              }}
            >
              <img src={sativa} className="card-img-top" alt="cannabis plant" />
              <div className="card-body">
                <p className="card-text">Sativa</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 option">
            <div
              className="card"
              onClick={() => {
                props.history.push("/indicas");
              }}
            >
              <img src={indica} className="card-img-top" alt="cannabis plant" />
              <div className="card-body">
                <p className="card-text">Indica</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 option">
            <div
              className="card"
              onClick={() => {
                props.history.push("/hybrids");
              }}
            >
              <img src={hybrid} className="card-img-top" alt="cannabis plant" />
              <div className="card-body">
                <p className="card-text">Hybrids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
