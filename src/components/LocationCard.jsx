import "../sass/_locationCard.scss";
import PropTypes from "prop-types";

export default function LocationCard({ img, icon }) {
  return (
    <div className="locationCard">
      <img src={img} className="locationCard-img" />
      <div className="locationCard-text">
        <p className="locationCard-text-title">New York</p>
        <p className="locationCard-text-date">9 - 10 Feb, 2023</p>
        <div className="locationCard-text-time">
          <img src={icon} className="locationCard-text-time-icon" />
          <p className="locationCard-text-time-text">7 hr 15 m</p>
        </div>
        <p className="locationCard-text-price">$294</p>
      </div>
    </div>
  );
}
LocationCard.propTypes = {
  img: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
