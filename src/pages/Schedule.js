import React from 'react'
import Banner from '../components/Banner'

const Schedule = () => {
  return (
    <main>
      <div className="container">
        <h1>New appointment </h1>
        <p>Here you can schedule an appointment with sales agent </p>

        <form className="form">
          <div className="form-group">
            <label for="exampleInputEmail1">Full name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

export default Schedule
