import React from 'react'

const Vehicle = () => {
  return (
    <main>
      <div className="container">
        <h1>Audi A8 </h1>
      </div>
      <div className="full">
        <div className="container">
          <figure>
            <img src={`img/full.jpg`} className="img-fluid" alt="Full " />
          </figure>
        </div>
      </div>
      <div className="container">
        <p>
          The Audi A8 is a four-door, full-size, luxury sedan manufactured and
          marketed by the German automaker Audi since 1994. Succeeding the Audi
          V8, and now in its fourth generation, the A8 has been offered with
          both front- or permanent all-wheel drive—and in short- and
          long-wheelbase variants.
        </p>
        <p>
          The first two generations employed the Volkswagen Group D platform,
          with the current generation deriving from the MLB platform. After the
          original model's 1994 release, Audi released the second generation in
          late 2002, the third in late 2009, and the fourth and current
          iteration in 2017.
        </p>
        <div class="details-panel-box">
          <h4>
            <strong>Key Features</strong> of Audi A8 3.0 TDI S12 Quattro
            Tiptronic
          </h4>

          <ul>
            <li>
              <span>Body</span>
              <span>Convertible</span>
            </li>
            <li>
              <span>Total Kilometres</span>
              <span>2090Km’s</span>
            </li>
            <li>
              <span>Fuel Type</span>
              <span>Diesel</span>
            </li>
            <li>
              <span>Reg.Year</span>
              <span>2013, Aug</span>
            </li>
          </ul>
        </div>

        <ul>
          <li>
            <span>Transmission</span>
            <span>Semi Automatic</span>
          </li>
          <li>
            <span>Engine</span>
            <span>3.7L V-L cyl</span>
          </li>
          <li>
            <span>Fuel Economy</span>
            <span>14.55 kmpl</span>
          </li>
          <li>
            <span>Color</span>
            <span>TitaniumMetalic</span>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Vehicle
