import "../sass/_newsCard.scss";
import PropTypes from "prop-types";

export default function NewsCard({ img, title }) {
  return (
    <div className="newsCard">
      <img src={img} className="newsCard-img" />
      <div className="newsCard-text">
        <p className="newsCard-text-subtitle">Do consectetur</p>
        <p className="newsCard-text-title">{title}</p>
        <div className="newsCard-text-time">
          <p className="newsCard-text-time-date">Dec 24, 2022</p>
          <p className="newsCard-text-time-read">5 mins read</p>
        </div>
      </div>
    </div>
  );
}
NewsCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
