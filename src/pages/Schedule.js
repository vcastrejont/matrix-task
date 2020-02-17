import React, { useState } from 'react'
import axios from 'axios'

const Schedule = () => {
  const [form, setForm] = useState({ name: '', email: '' })
  const [confirm, setConfirm] = useState('')
  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    axios
      .post('https://5e49d1f56eafb7001488be3a.mockapi.io/v1/appointments', form)
      .then(result => {
        setConfirm(result.data.createdAt)
        console.log(result.data.createdAt)
      })
  }

  return (
    <main>
      <div className="container">
        <h1>New appointment </h1>
        <p>Here you can schedule an appointment with a sales agent </p>

        <div className="form">
          <div className="row">
            <div className="col-md-6">
              {confirm && (
                <div className="thankyou">
                  <h4>Thank you </h4>
                  <p>
                    Your confirmation number is <strong>{confirm}</strong>
                  </p>
                </div>
              )}
              {!confirm && (
                <form onSubmit={onSubmitHandler}>
                  <p className="text-center">
                    Please fill the following form and you will receive a
                    confirmation number.
                  </p>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full name</label>
                    <input
                      value={form.name}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      value={form.email}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
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
  )
}

export default Schedule
