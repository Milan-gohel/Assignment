import React from "react";
import "../component/style.css";
import FormPage from "./FormPage";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const HomePage = () => {
  return (
    <div>
      <div className="Content">
        <div className="Header"> Pain & Functional Description </div>
        <Typography style={{ fontWeight: "bold" }}>
          The description of the current situation gives your Optimum
        </Typography>
        <Typography style={{ fontWeight: "bold" }}>
          Trainer a picture of and clues to the underlying causes of your
          problems
        </Typography>
        <Typography style={{ marginTop: "1rem", fontWeight: "bold" }}>
          If you have problems with pain/aches,stiffness,weakness or functional
          problems, describe
        </Typography>
        <Typography style={{ fontWeight: "bold" }}>
          {" "}
          this/these below.(List the symptoms in descending order with the most
          troublesome first)
        </Typography>
      </div>
      <TextField
        id="outlined-full-width"
        style={{ width: "104.5rem" }}
        margin="normal"
        variant="outlined"
      />
      <FormPage />
    </div>
  );
};
export default HomePage;
