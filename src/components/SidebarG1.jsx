import { useState } from "react";
import "../sass/_styleG1.scss";
import SidebarG2 from "./SidebarG2";
import { useEffect } from "react";
import { getdata, getusers } from "./ServicesSidebar/Sidebarservices";

const SidebarG1 = () => {
  const [isBenefits, setIsBenefits] = useState(false);
  const [flightData, setFlightData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getdata().then((response) => {
      setFlightData(response);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    getusers().then((response) => {
      setDataUser(response);
    });
  }, []);

  /* const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };
 */
  return (
    <div className="container">
      {" "}
      <img src="./Container 4.png"  />
      <h1 className="container__title">Cloudy Airlines</h1>{" "}
      <div className="container__OptionsBar">
        <div className="container__OptionsBar-items" onClick={() => setIsBenefits(false)}>
          <div className="container__OptionBar-items-box">
            <img src="./Fly.png" />
          </div>
          <p>Flight details</p>
        </div>
        <div className="container__OptionsBar-items" onClick={() => setIsBenefits(true)}>
          <div className="container__OptionBar-items-box">
            <img src="./Benefit.png" />
          </div>
          <p>Benefits</p>
        </div>
        <div></div>
        <div className="container__OptionsBar-items">
          <div className="container__OptionBar-items-box">
            <img src="./Refund.png" />
          </div>
          <p>Refund</p>
        </div>
        <div className="container__OptionsBar-items">
          <div className="container__OptionBar-items-box">
            <img src="./Reschedule.png" />
          </div>
          <p>Reschedule</p>
        </div>
      </div>
      {!isBenefits && (
        <div className="flightList">
          {" "}
          {/* Reemplaza con la clase CSS adecuada */}
          {flightData.map((flight, index) => (
            <div key={index}>
              <div className="flightDetails">
                {" "}
                {/* Reemplaza con la clase CSS adecuada */}
                <h2 className="flightDetailsTitle">Flight Details</h2>{" "}
                {/* Reemplaza con la clase CSS adecuada */}
                <div className="OriginInfo">
                  <h1 className="OriginLetter">
                    Origin Letter: {flight.origin_letter}
                  </h1>
                  <p className="OriginAirport">
                    Origin Airport: {flight.origin_airport}
                  </p>
                </div>
                <div className="FligtTiming">
                  <p className="flightTimeText">{flight.departure_time}</p>
                  <p className="flightTimeText2">
                    {flight.flight_duration.hours}
                    {flight.flight_duration.minutes}
                  </p>
                  <p className="flightTimeText">{flight.arrival_time}</p>
                </div>
                <div className="flightInfo">
                  <img src="./Billete.png" className="IconsStyle" />
                  <p className="flightCodeText"> {flight.flight_code}</p>
                  <p className="flightCabinText">
                    Cabin class: {flight.cabin_class}
                  </p>
                  <img src="./Case.png" className="IconsStyle" />
                  <p className="flightBaggageText">
                    Baggage: {flight.weight.baggage}
                  </p>
                  <p className="flightCBText">
                    Cabin Baggage: {flight.weight.cabin}
                  </p>
                  <img src="./Case.png" className="IconsStyle" />
                  <p className="flightAirbusText">Airbus: {flight.airbus}</p>
                  <p className="flightSeatText">
                    {flight.seat_layout} Seat Layout
                  </p>
                  <p className="flightInches">
                    {flight.inches} inches Seat pitch (standard)
                  </p>
                </div>
                {/*  Destination */}
                <div className="DestinationInfo">
                  <h1 className="destinationLetter">
                    {flight.destination_letter}
                  </h1>
                  <p className="destinationAirport">
                    {flight.destination_airport}
                  </p>
                </div>
              </div>
              <div className="Payment">
                <p className="Price">{flight.price}</p>
                <p className="pax">/pax</p>
                <img src="./Share.png" className="IconsStyle" />
              </div>
            </div>
          ))}
        </div>
      )}
      {isBenefits && <SidebarG2 flightData={flightData} />}
    </div>
  );
};

export default SidebarG1;
