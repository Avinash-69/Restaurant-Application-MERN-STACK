import React from "react";
import { data } from "../restApi.json"

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="header_Section">
          <h1 className="heading"><center>Popular Dishes</center></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis quo similique odit maiores. Quo, impedit. Laborum quibusdam laboriosam tenetur unde, 
          </p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element =>{
                    return (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Menu;
