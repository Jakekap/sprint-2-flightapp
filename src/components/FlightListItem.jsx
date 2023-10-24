import PropTypes from "prop-types";
import "../sass/_flightListItem.scss";
import dayjs from "dayjs";

export default function FlightListItem({ travelinfo, handleClick }) {
  const departureTimeFormatted = dayjs(travelinfo.departure_time).format(
    "h:mm A"
  );
  const arrivalTimeFormatted = dayjs(travelinfo.arrival_time).format("h:mm A");
  return (
    <div className="flightListItem-container">
      <div className="flightListItem-container-top">
        <div className="company">
          <img
            src={`/companyIcons/${travelinfo.airline_icon}.svg`}
            className="companyIcon"
          />
          <div>
            <p className="company-title">{travelinfo.airline}</p>
            <div className="company-weight">
              <img src="/bag.svg" className="company-weight-icon" />
              <p className="company-weight-text">{travelinfo.weight.baggage}</p>
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
              {travelinfo.flight_duration.hours} hr{" "}
              {travelinfo.flight_duration.minutes} min
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
            <p className="flightListStop-number-text">
              {travelinfo.layovers.toString()} stop
            </p>
          </div>
        </div>
        <p className="flightListPrice">
          {travelinfo.price.toString()} USD <span>/ pax</span>
        </p>
      </div>
      <div className="flightListItem-container-bottom">
        <button onClick={handleClick}>Choose</button>
      </div>
    </div>
  );
}
FlightListItem.propTypes = {
  travelinfo: PropTypes.object,
  handleClick: PropTypes.func,
};
