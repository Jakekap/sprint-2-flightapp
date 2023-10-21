import { useState } from "react";
import "../../src/styleG1.scss";
import ContentG2 from "./pageContainerG2";

const ContentG1 = () => {
  const [isBenefits, setIsBenefits] = useState(false);
  const [flightData, setFlightData] = useState([
    {
      departureAirport: "Houston (HOU)",
      arrivalAirport: "Las Vegas (LAS)",
      departureTime: "23:15",
      arrivalTime: "01:25",
      duration: "2h10",
      price: "$148.5/pax",
      airline: "Cloudy Airlines",
      flightNumber: "CA-6018",
      seatType: "Economy",
      baggageAllowance: "2 x 23 kg",
      cabinBaggageAllowance: "1x7kg",
      aircraftType: "Airbus A320",
      seatLayout: "3-3",
      seatPitch: "29 inches",
    },
    {
      departureAirport: "Las Vegas (LAS)",
      arrivalAirport: "Los Angeles (LAX)",
      departureTime: "07:40",
      arrivalTime: "09:55",
      duration: "2h15",
      price: "$148.5/pax",
      airline: "Cloudy Airlines",
      flightNumber: "CA-6291",
      seatType: "Economy",
      baggageAllowance: "2 x 23 kg",
      cabinBaggageAllowance: "1x7kg",
      aircraftType: "Airbus A320",
      seatLayout: "3-3-3",
      seatPitch: "32 inches",
    },
  ]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="container">
      {" "}
      {/* Reemplaza con la clase CSS adecuada */}
      <h1 className="container__title">Cloudy Airlines</h1>{" "}
      {/* Reemplaza con la clase CSS adecuada */}
      <div className="container__OptionsBar">
        <div className="container__OptionsBar-items" onClick={() => setIsBenefits(false)}>
          <div className="container__OptionBar-items-box">
            <img src="./Frame.png" />
          </div>
          <p>Flight details</p>
        </div>
        <div className="container__OptionsBar-items" onClick={() => setIsBenefits(true)}>
          <div className="container__OptionBar-items-box">
            <img src="./Frame (1).png" />
          </div>
          <p>Benefits</p>
        </div>
        <div></div>
        <div className="container__OptionsBar-items">
          <div className="container__OptionBar-items-box">
            <img src="./Frame (2).png" />
          </div>
          <p>Refund</p>
        </div>
        <div className="container__OptionsBar-items">
          <div className="container__OptionBar-items-box">
            <img src="./Frame (3).png" />
          </div>
          <p>Reschedule</p>
        </div>
      </div>
      {!isBenefits && (
        <div className="flightList">
          {" "}
          {/* Reemplaza con la clase CSS adecuada */}
          {flightData.map((flight) => (
            <>
              <button
                key={flight.flightNumber}
                onClick={() => handleFlightSelect(flight)}
              >
                {flight.departureAirport} to {flight.arrivalAirport}
              </button>
              <div className="flightDetails">
                {" "}
                {/* Reemplaza con la clase CSS adecuada */}
                <h2 className="flightDetailsTitle">Flight Details</h2>{" "}
                {/* Reemplaza con la clase CSS adecuada */}
                <p className="flightDetailsText">
                  Departure Airport: {flight.departureAirport}
                </p>
                <p className="flightDetailsText">
                  Arrival Airport: {flight.arrivalAirport}
                </p>
                <p className="flightDetailsText">
                  Departure Time: {flight.departureTime}
                </p>
                <p className="flightDetailsText">
                  Arrival Time: {flight.arrivalTime}
                </p>
                <p className="flightDetailsText">Duration: {flight.duration}</p>
                <p className="flightDetailsText">Price: {flight.price}</p>
                <p className="flightDetailsText">Airline: {flight.airline}</p>
                <p className="flightDetailsText">
                  Flight Number: {flight.flightNumber}
                </p>
                <p className="flightDetailsText">
                  Seat Type: {flight.seatType}
                </p>
                <p className="flightDetailsText">
                  Baggage Allowance: {flight.baggageAllowance}
                </p>
                <p className="flightDetailsText">
                  Cabin Baggage Allowance: {flight.cabinBaggageAllowance}
                </p>
                <p className="flightDetailsText">
                  Aircraft Type: {flight.aircraftType}
                </p>
                <p className="flightDetailsText">
                  Seat Layout: {flight.seatLayout}
                </p>
                <p className="flightDetailsText">
                  Seat Pitch: {flight.seatPitch}
                </p>
              </div>
            </>
          ))}
        </div>
      )}
      {isBenefits && <ContentG2 flightData={flightData} />}
    </div>
  );
};

export default ContentG1;
