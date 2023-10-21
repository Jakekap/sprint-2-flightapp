import PropTypes from "prop-types";
import CalendarIcon from "../components/CalendarIcon";
import "../sass/_calendarButton.scss";

export default function CalendarButton({ label, clicked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`calendar-buttons_button ${clicked ? "clicked" : ""}`}
    >
      <CalendarIcon stroke={clicked ? "#FFF" : "#fe902b"} />
      {label}
    </button>
  );
}
CalendarButton.propTypes = {
  label: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
