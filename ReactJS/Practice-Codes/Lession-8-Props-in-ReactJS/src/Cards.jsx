import React from "react";
import Images from "./Images";
import Heading from "./Heading";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc}/>
          <div className="card_info">
            <span className="card_category">{props.category}</span>
            <Heading title={props.title}/>
            <a href={props.source} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;