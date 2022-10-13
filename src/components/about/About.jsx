import React from "react";
import "./about.css";
import img from "../../assets/about.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About me</h2>
      <div className="about__container grid">
        <img src={img} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis esse, laborum sed cupiditate facere
              architecto aliquam nulla aspernatur temporibus dolor porro aperiam
              quis qui! Voluptates odio minima iusto harum.
            </p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">65%</span>
              </div>
              <div className="skills__bar css">
                <span className="skills__porcentage "></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">55%</span>
              </div>
              <div className="skills__bar html">
                <span className="skills__porcentage "></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">REACT</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar react">
                <span className="skills__porcentage "></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JAVASCRIPT</h3>
                <span className="skills__number">65%</span>
              </div>
              <div className="skills__bar js">
                <span className="skills__porcentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
