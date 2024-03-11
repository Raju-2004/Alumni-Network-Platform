import React, { useEffect, useState } from "react";
import AlumniCard from "./AlumniCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
// import '../Feed/CustomSlickTheme.css';

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <MdArrowBack className="slick-arrow slick-prev" />,
    nextArrow: <MdArrowForward className="slick-arrow slick-prev" />,
    // swipeToSlide: true, 
  };

  useEffect(() => {
    const getAlumni = async () => {
      try {
        const res = await fetch("http://localhost:4000/alumni");
        const data = await res.json();
        setAchievements(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAlumni();
  }, []);

  return (
    <div className="Achievements">
      <h1>Achievements of <span style={{color:"#36017F"}}>Alumni</span></h1>
      {achievements.length > 0 ? (
        <Slider {...settings} className="alumni">
          {achievements.map((a) => (
            a.Achievements && (
              <div key={a._id}>
                <AlumniCard alumni={a} />
              </div>
            )
          ))}
        </Slider>
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}

export default Achievements;
