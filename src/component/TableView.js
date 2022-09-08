import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableView = (props) => {
  const { formData, setShowTable } = props;
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          fontWeight: "bold",
          margin: "1rem",
        }}
      >
        Form Details
      </div>
      <div
        style={{
          height: 350,
          width: "85%",
          margin: "0rem 7rem 0rem 7rem",
        }}
      >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">
                  Have you been diagnosed with this problem?
                </TableCell>
                <TableCell align="right">
                  Did the problem start after a physical trauma?
                </TableCell>
                <TableCell align="right">
                  Did the problem start after a mental trauma?
                </TableCell>
                <TableCell align="right">
                  How often do you experience the problem?
                </TableCell>
                <TableCell align="right">
                  When do you experience the problem?
                </TableCell>
                <TableCell align="right">Average</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formData.map((row) => (
                <TableRow key={row.index}>
                  <TableCell component="th" scope="row">
                    {row.index + 1}
                  </TableCell>
                  <TableCell align="right">{row.radio1}</TableCell>
                  <TableCell align="right">{row.radio2}</TableCell>
                  <TableCell align="right">{row.radio3}</TableCell>
                  <TableCell align="right">{row.radio4}</TableCell>
                  <TableCell align="right">{row.checkboxes.join()}</TableCell>
                  <TableCell align="right">{row.radio6}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ margin: "1rem 7rem" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          style={{
            marginRight: "1rem",
            width: "160px",
          }}
          onClick={() => {
            setShowTable(false);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};
export default TableView;
