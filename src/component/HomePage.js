import React from "react";
import '../component/style.css';

const HomePage = () => {
  return (
    <div>
      <div className="Content">
        <div className="Header"> Pain & Functional Description </div>
        <div className="Description">The description of the current situation gives your Optimum</div>
        <div className="Description">
          Trainer a picture of and clues to the underlying causes of your
          problems
        </div>
        <div className="Description" style={{ marginTop: "1rem" }}>
          If you have problems with pain/aches,stiffness,weakness or functional
          problems, descripbe
        </div>
        <div className="Description">
          {" "}
          this/these below.(List the symptoms in descending order with the most
          troublesome first)
        </div>
      </div>
      <div className="Box" />
    </div>
  );
};
export default HomePage;
