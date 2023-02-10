import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formFields, setFormFields] = useState({
    userEmail: "",
    password: "",
    userName: ""
  });

  return (
    <>
      <section className="vh-80" style={{ marginTop: "3%" }}>
        <div className="container h-80">
          <div className="row d-flex justify-content-center align-items-center h-70">
            <div className="col-lg-11 col-xl-10">
              <div className="card text-black" style={{ borderRadius: "15px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign in
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

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Didn't Register yet?{" "}
                            <NavLink to="/signup" className="link-success">
                              Sign-up
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
