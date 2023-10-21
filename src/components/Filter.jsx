import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Filter({ type }) {
  return (
    <section className="filterContainer">
      <div>
        <div>
          <img />
          <p>Sort by</p>
        </div>
        <p>Reset</p>
      </div>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup defaultValue="female" name="radio-buttons-group">
          <FormControlLabel
            value="lowest"
            control={<Radio />}
            label="Lowest price"
          />
          <FormControlLabel
            value="highest"
            control={<Radio />}
            label="Highest price"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
}
Filter.propTypes = {
  type: PropTypes.string.isRequired,
};
