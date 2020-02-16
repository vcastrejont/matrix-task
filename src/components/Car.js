import React from "react";

const Car = () => {
  return (
    <article className="col">
      <div className="car-box">
        <figure>
          <img src="img/recent-car-1.jpg" className="img-fluid" alt="Car" />
          <span>2005 Model</span>
        </figure>

        <div className="car-content">
          <h6>Ford Shelby GT350</h6>
          <span className="price">$45,000</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="#" className="btn btn-secondary push-right">
            Schedule a tour
          </a>
        </div>
      </div>
    </article>
  );
};

export default Car;
