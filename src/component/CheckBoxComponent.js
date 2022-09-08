import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckboxComponent = ({ checkbox, setCheckbox, index }) => {
  const hanleCheck = (e) => {
    if (e.target.checked) {
      setCheckbox([...checkbox, e.target.value], index);
    } else {
      const index = checkbox.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        checkbox.splice(index, 1); // 2nd parameter means remove one item only
      }
      setCheckbox(checkbox, index);
    }
  };

  console.log("checkbox", checkbox);
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            value="Not relevant"
            checked={checkbox.includes("Not relevant")}
            onChange={(e) => hanleCheck(e, index)}
            name="Not relevant"
            color="primary"
          />
        }
        color="primary"
        label="Not relevant"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.includes("When laying down")}
            value="When laying down"
            onChange={(e) => hanleCheck(e, index)}
            name="When laying down"
            color="primary"
          />
        }
        color="primary"
        label="When lying down"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.includes("When sitting")}
            value="When sitting"
            onChange={(e) => hanleCheck(e, index)}
            name="When sitting"
            color="primary"
          />
        }
        color="primary"
        label="When sitting"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.includes("under standing")}
            value="under standing"
            onChange={(e) => hanleCheck(e, index)}
            name="under standing"
            color="primary"
          />
        }
        color="primary"
        label="under standing"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkbox.includes("In walking")}
            value="In walking"
            onChange={(e) => hanleCheck(e, index)}
            name="In walking"
            color="primary"
          />
        }
        color="primary"
        label="In walking"
      />
    </>
  );
};
export default CheckboxComponent;
