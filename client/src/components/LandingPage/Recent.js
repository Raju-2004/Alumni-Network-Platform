
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "../Feed/Events/EventCard";
import Events from "../../Assets/Events.jpeg";
import alumni from "../../Assets/Alumni.jpg";
import job from "../../Assets/Jobs.jpg";
import news from "../../Assets/News.jpeg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "../../components/Feed/CustomSlickTheme.css";

function Recent() {
  const location = useLocation();

  const cards = [
    {
      title: "Events",
      description: [
        "All of our events are completely free and open for everyone. Fun-filled events with no compromise on quality.",
        "Events conducted will help develop various skills of students in co-curricular activities and to expose them to the current trends in the technical and professional fields.",
        "Explore the plethora of events & have the opportunity to connect with alumni",
      ],
      link: "/dashboard/events",
      image: Events,
    },
    {
      title: "Alumni",
      description: [
        "Connect with alumni to stay informed about the latest trends and developments in your field. Our alumni are always at the forefront of innovation.",
        "Our alumni community comprises industry leaders, experts, and visionaries. Engage with them to tap into their vast knowledge and experience.",
        "Explore and grab the opportunity to connect with alumni",
      ],
      link: "/dashboard/alumni",
      image: alumni,
    },
    {
      title: "Jobs",
      description: [
        "Gain access to job listings posted by our esteemed alumni. These positions are tailored for individuals like you, with a shared academic background and connection.",
        "These job postings aren't just about employment; they come with a built-in support system. Our alumni understand your potential and are ready to mentor, guide, and uplift you",
        "Explore and grab the opportunity to connect with alumni",
      ],
      link: "/dashboard/jobs",
      image: job,
    },
    {
      title: "News",
      description: [
        "Our alumni are at the forefront of the latest developments. Keep yourself informed about industry trends and relevant news with their contributions.",
        "Immerse yourself in a world of knowledge and inspiration with news and articles crafted by our alumni. Benefit from their unique insights and experiences.",
        "Become part of a community that thrives on sharing knowledge and insights",
      ],
      link: "/dashboard/news",
      image: news,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <MdArrowBack className="slick-arrow slick-prev" />,
    nextArrow: <MdArrowForward className="slick-arrow slick-prev" />,
    // swipeToSlide: true, 
  };

  return (
    <div className={`Recent ${location.pathname === '/' ? 'home-Recent' : ''}`}>
      <Slider {...settings} className="slider-wrapper">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <div className="details">
                <h2>{card.title}</h2>
                <ul>
                  {card.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                <Link className="Links" to={card.link}>
                  Explore {card.title}
                </Link>
              </div>
              <div className="image">
                <img src={card.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Recent;
