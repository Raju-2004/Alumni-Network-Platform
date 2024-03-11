import React from "react";
import anp from "../../Assets/graduway.png";
import Achievements from "./Achievements";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Overview from "./Overview";
function Image() {
  const location = useLocation();
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem("UserEmail");
  if (!isUserLoggedIn && location.pathname === "/dashboard") {
    navigate("/");
    toast.info(" You must be sign up or log in!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <div className="Image">
        <div className="img">
          <img src={anp} alt="anp" />
        </div>
        <div className="content">
          <div className="title">
            <p>Connect, Grow, and Succeed with our</p>
            <p>comprehensive AlumNexus</p>
            <p className="matter">
              Leverage the power of student, alumni and business communities to
              drive engagement and event participation, enhance mentoring and
              career development programs and grow your pool of future
              volunteers and donors using our alumni engagement software
            </p>
          </div>
          <Link className="Links" to="/dashboard">
            connect with alumni
          </Link>
        </div>
      </div>
    </>
  );
}

export default Image;
