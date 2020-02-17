import React, { useState, useEffect } from "react";
import axios from "axios";
import Car from "./Car";

const Listing = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://5e49d1f56eafb7001488be3a.mockapi.io/v1/vehicles"
      );
      // console.log(result.data);
      setVehicles(result.data);
    }

    fetchData();
  }, []);

  return (
    <main>
      <div className="list container">
        <h2>POPULAR NEW CARS</h2>
        <div className="row">
          {vehicles &&
            vehicles.map(item => (
              <article className="col" key={item.id}>
                <Car
                  year={item.year}
                  model={item.model}
                  maker={item.maker}
                  price={item.price}
                  id={item.id}
                />
              </article>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Listing;
