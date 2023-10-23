import PropTypes from "prop-types";
import "../sass/_flightListItem.scss";
import dayjs from "dayjs";

export default function FlightListItem({
  companyIcon,
  companyName,
  price,
  weight,
  departureTime,
  arrivalTime,
  flightDuration,
  layovers,
}) {
  const departureTimeFormatted = dayjs(departureTime).format("h:mm A");
  const arrivalTimeFormatted = dayjs(arrivalTime).format("h:mm A");
  return (
    <div className="flightListItem-container">
      <div className="flightListItem-container-top">
        <div className="company">
          <img src={companyIcon} className="companyIcon" />
          <div>
            <p className="company-title">{companyName}</p>
            <div className="company-weight">
              <img src="/bag.svg" className="company-weight-icon" />
              <p className="company-weight-text">{weight}</p>
            </div>
          </div>
        </div>
        <div className="flightListTime">
          <p className="flightListTime-title">
            {departureTimeFormatted} - {arrivalTimeFormatted}
          </p>
          <div className="flightListTime-hour">
            <img src="/timeIcon.svg" className="flightListTime-hour-icon" />
            <p className="flightListTime-hour-text">
              {flightDuration.hours} hr {flightDuration.minutes} min
            </p>
          </div>
        </div>
        <div className="flightListStop">
          <img src="/line.svg" className="flightListStop-line" />
          <div className="flightListStop-number">
            <img
              src="/landingPlane.svg"
              className="flightListStop-number-icon"
            />
            <p className="flightListStop-number-text">{layovers} stop</p>
          </div>
        </div>
        <p className="flightListPrice">
          {price} USD <span>/ pax</span>
        </p>
      </div>
      <div className="flightListItem-container-bottom">
        <button>Choose</button>
      </div>
    </div>
  );
}
FlightListItem.propTypes = {
  companyIcon: PropTypes.string,
  companyName: PropTypes.string,
  price: PropTypes.string,
  weight: PropTypes.string,
  departureTime: PropTypes.string,
  arrivalTime: PropTypes.string,
  flightDuration: PropTypes.string,
  layovers: PropTypes.string,
};
