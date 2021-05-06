import React from "react";
import "./info.css";
const InfoSection = () => {
  return (
    <div className="info">
      <div className="leftColumn">
        <h3 className="desc-title">What Shoebar stands for?</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          aspernatur, voluptatibus illum sed distinctio atque rem dolore
          perferendis voluptas aliquid, neque debitis obcaecati veniam, numquam
          eligendi architecto ipsa? Esse, excepturi.
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          minima iusto facilis recusandae quisquam numquam, ad labore,
          consectetur qui perferendis reiciendis illo odit vitae dicta minus
          earum hic sint itaque!
        </p>
      </div>
      <div className="rightColumn">
        <div className="enquiryContainer">
          <h3 className="topic">Want to enquire more?</h3>
          <form className="form">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="message"
                placeholder="Message"
              />
            </div>
            <div className="form-group">
              <input
                className="btn"
                type="submit"
                name="message"
                placeholder="Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
