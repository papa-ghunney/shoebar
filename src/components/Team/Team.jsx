import React, { useEffect } from "react";
import "./Team.css";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../../images/ghunney.jpg";
const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="team">
      <div className="team-container">
        <div className="row">
          <div data-aos="fade-right" className="leftColumn">
            <h2 className="team-title">Meet The CEO</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
              bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam
              commodo nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
              bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.
            </p>
          </div>
          <div data-aos="zoom-out" className="rightColumn">
            <img className="team-img" src={me} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
