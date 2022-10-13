import React, { useState } from "react";
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) =>{
    const updatedItems = Menu.filter((curElem) =>{
      return curElem.category === categoryItem;
    });
    setItems(updatedItems)
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Work</h2>

      <div className="works__filters">
      <span className="work__item"  onClick={() =>{setItems(Menu)}}>All</span>
        <span className="work__item" onClick={() =>{
          filterItem("Front end")}} >Front end</span>
        <span className="work__item" onClick={() =>{
          filterItem("Back end")}} >Back end</span>
        <span className="work__item" onClick={() =>{
          filterItem("Algorith")}}>Algorith</span>
        <span className="work__item" onClick={() =>{
          filterItem("Projects")}}>Projects</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, title, image, category } = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src= {image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
                  <span className="work__category"> {category} </span>
                  <h3 className="work__title"> {title} </h3>
                  <a href="#" className="work__btn">
                    <i className="icon-link work__btn-icon"></i>
                  </a>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
