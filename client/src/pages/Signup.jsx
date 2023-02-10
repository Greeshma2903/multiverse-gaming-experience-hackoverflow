import React , {useState} from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [formFields, setFormFields] = useState({
    userEmail: "",
    password: "",
    userName: ""
  });

  const formHandler = (e) => {};

  return (
    <>
      <section className="Signup min-h-screen flex justify-center">
        <div className="flex justify-center items-center w-3/4">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              Sign up
            </p>

            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="cpassword">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="cpassword"
                    placeholder="Confirm password"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button
                  type="submit"
                  className="btn bg-peach hover:bg-brick hover:text-white"
                >
                  Register
                </button>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already Registered?{" "}
                  <NavLink to="/login" className="link-success">
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="img-fluid"
              alt=" "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
