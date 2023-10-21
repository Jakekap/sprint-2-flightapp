import Filter from "../components/Filter";
import "../sass/_flightList.scss";

export default function FlightList() {
  return (
    <section className="flightList-container">
      <div className="banner">
        <img className="banner-img" src="/banner.png" />
      </div>
      <section className="flightList-main">
        <Filter type="sort" />
      </section>
    </section>
  );
}
