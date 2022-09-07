import React, { useState } from "react";
import "../component/style.css";
import { Typography, FormControlLabel, Paper } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import TableView from "./TableView.js";

const FormPage = () => {
  const radiovalue = {
    radio1: "",
    radio2: "",
    radio3: "",
    radio4: "",
    index: "",
  };

  const [formData, setFormData] = useState([radiovalue]);
  const [showTable, setShowTable] = useState(false);

  const handleRadioChange = (event, index) => {
    const updatedForm = formData.map((val, i) => {
      val.index = i;
      return index === i
        ? Object.assign(val, { [event.target.name]: event.target.value })
        : val;
    });

    setFormData(updatedForm);
  };

  const addForm = () => {
    setFormData([...formData, radiovalue]);
  };

  return (
    <>
      {!showTable ? (
        <div>
          {formData.map((data, index) => (
            <div style={{ margin: "1rem 7rem 1rem 7rem" }}>
              <Paper key={index} style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography style={{ marginRight: "2.8rem" }}>
                    Have you been diagnosed with this problem?
                  </Typography>
                  <RadioGroup
                    row
                    name="radio1"
                    value={formData[index].radio1}
                    onChange={(e) => handleRadioChange(e, index)}
                  >
                    <FormControlLabel
                      value="Not relevant"
                      control={<Radio color="primary" />}
                      label="Not relevant"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                  </RadioGroup>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <Typography style={{ marginRight: "2.4rem" }}>
                    Did the problem start after a physical trauma?
                  </Typography>
                  <RadioGroup
                    row
                    name="radio2"
                    value={formData[index].radio2}
                    onChange={(e) => handleRadioChange(e, index)}
                  >
                    <FormControlLabel
                      value="Not relevant"
                      control={<Radio color="primary" />}
                      label="Not relevant"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                  </RadioGroup>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "1rem",
                  }}
                >
                  <Typography style={{ marginRight: "3rem" }}>
                    Did the problem start after a mental trauma?
                  </Typography>
                  <RadioGroup
                    row
                    name="radio3"
                    value={formData[index].radio3}
                    onChange={(e) => handleRadioChange(e, index)}
                  >
                    <FormControlLabel
                      value="Not relevant"
                      control={<Radio color="primary" />}
                      label="Not relevant"
                    />
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                  </RadioGroup>
                </div>
                <div style={{ display: "flex", paddingTop: "2rem" }}>
                  <Typography style={{ marginRight: "2rem" }}>
                    How often do you experience the problem?
                  </Typography>
                </div>
                <div>
                  <RadioGroup
                    row
                    name="radio4"
                    value={formData[index].radio4}
                    onChange={(e) => handleRadioChange(e, index)}
                  >
                    <FormControlLabel
                      value="Not relevant"
                      control={<Radio color="primary" />}
                      label="Not relevant"
                    />
                    <FormControlLabel
                      value="Daily"
                      control={<Radio color="primary" />}
                      label="Daily"
                    />
                    <FormControlLabel
                      value="Several times/week"
                      control={<Radio color="primary" />}
                      label="Several times/week"
                    />
                    <FormControlLabel
                      value="A few times/month"
                      control={<Radio color="primary" />}
                      label="A few times/month"
                    />
                    <FormControlLabel
                      value="A few times/year"
                      control={<Radio color="primary" />}
                      label="A few times/year"
                    />
                  </RadioGroup>
                </div>
                <div style={{ display: "flex", paddingTop: "2rem" }}>
                  <Typography style={{ marginRight: "2rem" }}>
                    When do you experience the problem?
                  </Typography>
                </div>
                <div>
                  <RadioGroup
                    name="radio5"
                    value={formData[index].radio5}
                    onChange={(e) => handleRadioChange(e, index)}
                  >
                    <FormControlLabel
                      value="Not relevant"
                      control={<Radio color="primary" />}
                      label="Not relevant"
                    />
                    <FormControlLabel
                      value="When lying down"
                      control={<Radio color="primary" />}
                      label="When lying down"
                    />
                    <FormControlLabel
                      value="When sitting"
                      control={<Radio color="primary" />}
                      label="When sitting"
                    />
                    <FormControlLabel
                      value="Under standing"
                      control={<Radio color="primary" />}
                      label="Under standing"
                    />
                    <FormControlLabel
                      value="In walking"
                      control={<Radio color="primary" />}
                      label="In walking"
                    />
                  </RadioGroup>
                </div>
                <div style={{ display: "flex", paddingTop: "2rem" }}>
                  <Typography style={{ marginRight: "2rem" }}>
                    How intense is the experience of the problem on average on a
                    0-10 scale?
                  </Typography>
                </div>
                <div>
                  <RadioGroup
                    row
                    name="radio6"
                    value={formData[index].radio6}
                    onChange={(e) => handleRadioChange(e, index)}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="1"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="2"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="3"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio color="primary" />}
                      label="4"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio color="primary" />}
                      label="5"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio color="primary" />}
                      label="6"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="7"
                      control={<Radio color="primary" />}
                      label="7"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio color="primary" />}
                      label="8"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="9"
                      control={<Radio color="primary" />}
                      label="9"
                      labelPlacement="top"
                    />
                    <br />
                    <FormControlLabel
                      value="10"
                      control={<Radio color="primary" />}
                      label="10"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </div>
              </Paper>
            </div>
          ))}
          <Divider variant="middle" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-1.5rem",
            }}
          >
            <IconButton
              onClick={addForm}
              color="primary"
              aria-label="add to shopping cart"
              size="medium"
            >
              <AddCircleIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "5rem",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                marginRight: "1rem",
                width: "160px",
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                console.log(formData);
                setShowTable(true);
              }}
              color="primary"
              style={{ width: "160px" }}
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <TableView formData={formData} setShowTable={setShowTable} />
      )}
    </>
  );
};
export default FormPage;
