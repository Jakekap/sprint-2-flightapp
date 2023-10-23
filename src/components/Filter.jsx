import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

import "../sass/_filter.scss";

const marks = [
  {
    value: 0,
    label: "0h",
  },
  {
    value: 22,
    label: "22h",
  },
];

function valuetext(value) {
  return `${value}h`;
}

export default function Filter({ type }) {
  return (
    <section className="filterContainer">
      <div className="filterContainer-top">
        <div className="filterContainer-top-title">
          <img className="filterContainer-top-title-icon" src="/filter.svg" />
          <p className="filterContainer-top-title-text">
            {type === "sort"
              ? "Sort by"
              : type === "filter"
              ? "Filters"
              : "None"}
          </p>
        </div>
        <p className="filterContainer-top-reset">Reset</p>
      </div>
      <Divider />
      {type === "sort" && (
        <FormControl className="radioContainer">
          <div className="radioLabel">
            <FormLabel className="radioLabel-text">Price</FormLabel>
            <img className="radioLabel-icon" src="/dropArrow.svg" />
          </div>
          <RadioGroup name="radio-buttons-group">
            <FormControlLabel
              value="lowest"
              control={<Radio size="small" />}
              label="Lowest price"
            />
            <FormControlLabel
              value="highest"
              control={<Radio size="small" />}
              label="Highest price"
            />
          </RadioGroup>
        </FormControl>
      )}
      {type === "filter" && (
        <>
          <FormGroup className="radioContainer">
            <div className="radioLabel">
              <FormLabel className="radioLabel-text">No. of transit</FormLabel>
              <img className="radioLabel-icon" src="/dropArrow.svg" />
            </div>
            <FormControlLabel control={<Checkbox />} label="Direct" />
            <FormControlLabel control={<Checkbox />} label="1 transit" />
          </FormGroup>
          <Divider />
          <FormGroup className="radioContainer">
            <div className="radioLabel">
              <FormLabel className="radioLabel-text">Transit point</FormLabel>
              <img className="radioLabel-icon" src="/dropArrow.svg" />
            </div>
            <FormControlLabel control={<Checkbox />} label="Osaka (ITM)" />
            <FormControlLabel
              control={<Checkbox />}
              label="Kuala Lumpur (KUL)"
            />
          </FormGroup>
          <Divider />
          <FormGroup className="radioContainer">
            <div className="radioLabel">
              <FormLabel className="radioLabel-text">
                Transit duration
              </FormLabel>
              <img className="radioLabel-icon" src="/dropArrow.svg" />
            </div>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              max={22}
              valueLabelDisplay="auto"
              marks={marks}
              color="purple"
            />
          </FormGroup>
        </>
      )}
    </section>
  );
}
Filter.propTypes = {
  type: PropTypes.string.isRequired,
};
