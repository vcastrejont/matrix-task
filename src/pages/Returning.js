import React, { useState } from "react";
import axios from "axios";

const Returning = () => {
  const [data, setData] = useState();
  const [id, setId] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    axios
      .get(
        "https://5e49d1f56eafb7001488be3a.mockapi.io/v1/appointments/" +
          id.substr(3)
      )
      .then(result => {
        setData(result.data);
        console.log(result.data);
      });
  };

  const onChangeHandler = e => {
    setId(e.target.value);
  };

  return (
    <main>
      <div className="container">
        <h1>Returning clients </h1>

        <div className="form">
          <div className="row">
            <div className="col-md-6">
              {data && (
                <div className="thankyou">
                  <h4>Thank you </h4>
                  <p>
                    Your appointment name is <strong>{data.name}</strong>
                  </p>
                  <p>
                    Your appointment email is <strong>{data.email}</strong>
                  </p>
                </div>
              )}
              {!data && (
                <form onSubmit={onSubmitHandler}>
                  <p>
                    Here you can check your appointment with our sales agents
                  </p>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Your confirmation ID:
                    </label>
                    <input
                      value={id}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={onChangeHandler}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              )}
            </div>
            <div className="col-md-6">
              <img src="img/sales.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Returning;
