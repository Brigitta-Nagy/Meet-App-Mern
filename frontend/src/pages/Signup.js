import React from 'react'

function Signup() {
  return (
    <form className='container'>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
      />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="mb-3">
      <label>Confirm password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Confirm password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/sign-in">sign in?</a>
    </p>
  </form>
)

}

export default Signup