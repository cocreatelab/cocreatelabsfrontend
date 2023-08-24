import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const cards = ({ style }) => {
  return (
    <>
      <div
        className="rounded"
        style={{
					width: "20rem",
					background: "#ffff",
          height: "15rem",
          boxShadow: "10px 10px 10px #b1b1b1",
        }}>
        <div className="card border-0 outline-0 h-100 p-3" style={style}>
          <div className="card-body rounded">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faUser}
                style={{ width: "20px", fontSize: "50px" }}
              />
              <h5 className="card-title mx-3">Filip Dassaley</h5>
            </div>
            <h6 className="card-subtitle mb-2">23 Aug 2022</h6>
            <p className="card-text">
              Araa and I talked about career field decisions and my portfolio. I
              really appreciated his feedback and advice. :)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
