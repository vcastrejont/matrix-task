import React from "react";
import { Link } from "react-router-dom";

const Car = ({ model, year, maker, price, id }) => {
  const priceFormat = price => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  return (
    <div className="car-box">
      <figure>
        <Link to="/vehicle">
          <img
            src={`img/recent-car-${id}.jpg`}
            className="img-fluid"
            alt={model}
          />
          <span>
            {model} {year}
          </span>
        </Link>
      </figure>

      <div className="car-content">
        <h4>
          {maker}
          {` `}
          {model}
        </h4>
        <span className="price">${priceFormat(price)}</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="text-right">
          <Link to="/schedule" className="btn btn-secondary">
            Schedule
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Car;
