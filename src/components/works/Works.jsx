import React from "react";
import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/cblogo.png",
      title: "LinkedIn",
      desc: "",
      img: "https://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png",
      link: "https://www.linkedin.com/in/coreyboensch/",
    },
    {
      id: "2",
      icon: "./assets/cblogo.png",
      title: "GitHub",
      desc: "",
      img: "https://pngimg.com/uploads/github/github_PNG5.png",
      link: "https://github.com/cboensch6505",
    },
    {
      id: "3",
      icon: "./assets/cblogo.png",
      title: "Instagram",
      desc: "",
      img: "https://pngimg.com/uploads/instagram/instagram_PNG9.png",
      link: "https://instagram.com/theorycz",
    },
    {
      id: "4",
      icon: "./assets/cblogo.png",
      title: "Portfolio",
      desc: "",
      img: "http://devcorey.com/assets/img/CROPPED-01.png",
      link: "https://devcorey.com",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  // function socialClick(link) {
  //   window.location.href = link
  // }

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <a href={d.link} target="_blank" rel="noreferrer" key={d.id}>
            <div
              className="container" /* onClick={() => socialClick(d.link)} */
            >
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span></span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
