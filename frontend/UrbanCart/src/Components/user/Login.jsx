import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <br /><br />
        <section className="container-fluid mt-4">
          <div className="row">
            <div className="col-sm-6 m-auto">
              <div className="card">
                <div className="card-header">
                  <h3 className='card-title text-center'>Login</h3>
                </div>
                <div className="card-body ">
                    <form className='p-1'>
                      <label htmlFor="email" className='form-label'>Email Id</label>
                      <input type="email" name="email" id="email" className='form-control mb-3' placeholder='enter email id'/>
                      <label htmlFor="pwd" className='form-label'>Password</label>
                      <input type="password" name="pwd" id="pwd" className='form-control mb-3'/>
                      <button className="btn btn-primary">Submit</button>
                </form>
                <p className="text-center mt-3 mb-0">
                  Don&apos;t have a account ?{" "}
                  <Link>Register</Link>
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Login
