import React from "react";
import Car from "./Car";

const Main = () => {
  return (
    <main>
      <div className="list container">
        <h2>POPULAR NEW CARS</h2>
        <div className="row">
          <Car />
          <Car />
          <Car />
          <Car />
        </div>
      </div>
    </main>
  );
};

export default Main;
