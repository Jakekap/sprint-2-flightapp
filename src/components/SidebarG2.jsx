import React, { useState } from "react";
import '../../src/styleG2.scss'

const ContentG2 = ({ flightData }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  
  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="container"> {/* Reemplaza con la clase CSS adecuada */}
      <h1 className="title">Cloudy Airlines</h1> {/* Reemplaza con la clase CSS adecuada */}
      <div className="flightList"> {/* Reemplaza con la clase CSS adecuada */}
        {flightData.map((flight) => (
          <>
          <button
            key={flight.flightNumber}
            onClick={() => handleFlightSelect(flight)}
          >
            {flight.departureAirport} to {flight.arrivalAirport}
          </button>
          <div className="flightDetails"> {/* Reemplaza con la clase CSS adecuada */}
          <p>Flight number: {flight.flightNumber}</p>
          <p>Departure airport: {flight.departureAirport}</p>
          <p>Arrival airport: {flight.arrivalAirport}</p>
          <p>Departure time: {flight.departureTime}</p>
          <p>Arrival time: {flight.arrivalTime}</p>
          <p>Price: {flight.price}</p>
        </div>
        </>
        ))}
      </div>
    </div>
  );
};

export default ContentG2;