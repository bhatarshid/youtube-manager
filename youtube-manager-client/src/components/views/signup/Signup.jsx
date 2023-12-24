import React from 'react'
import Bottomleftsvg from '../../../assets/svgs/Bottomleftsvg'
import Toprightsvg from '../../../assets/svgs/Toprightsvg'
import Googlesvg from '../../../assets/svgs/Googlesvg'

const Signup = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="mt-2">
        <h3 className="" style={{color:'#FF6666', fontFamily:'sans-serif'}} >YouTube Manager</h3>
      </div>

      <div className="container d-flex justify-content-center align-items-center flex-column h-75 w-75">
        <div>
          <h4 className="text-muted mb-4">Signup</h4>
        </div>
        <div className="w-50">
          <form>
            <div className="mb-4">
              <label htmlFor="username">Username</label>
              <br />
              <input
                className="w-100 form-control form-control-sm"
                id="username"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <br />
              <input
                className="w-100 form-control form-control-sm"
                id="password"
                type="text"
              />
            </div>
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <button
                className="btn btn-danger rounded-pill btn-sm w-25"
                type="submit"
              >
                Signup
              </button>
            </div>
            <div>
              <p>Already have an Account?  <a className="link-opacity-80 text-center" href="/login">
                  Login
                </a></p>
            </div>
          </form>
        </div>
        <div className="d-flex align-items-center w-50 mb-4">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">Or Signup with</span>
          <hr className="flex-grow-1" />
        </div>
        <div>
          <button className="btn btn-outline-primary rounded-pill text-center"><Googlesvg/> Sign up with Google</button>
        </div>
      </div>

      <Bottomleftsvg />
      <Toprightsvg />
    </div>
  )
}

export default Signup