import React, { useState } from "react";
import '../sass/_styleG2.scss'

const SidebarG2 = ({ flightData }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  
  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="container"> {/* Reemplaza con la clase CSS adecuada */}
      <img src="./Container 4.png" />
      <h1 className="title">Cloudy Airlines</h1> {/* Reemplaza con la clase CSS adecuada */}
      <h2 className="subtitle">Conditions</h2>
      <div className="flightList"> {/* Reemplaza con la clase CSS adecuada */}
        {flightData.map((flight) => (
          <>
          <button
            key={flight.flight_code}
            onClick={() => handleFlightSelect(flight)}
          >
            {flight.origin_letter} to {flight.destination_letter}
          </button>
          <div className="flightDetails"> {/* Reemplaza con la clase CSS adecuada */}
          <div className="DepsrtureArrival">
          <p>Departure airport: {flight.origin_airport}</p>
          <p>Arrival airport: {flight.destination_airport}</p>
          </div>
            <div></div>
            <img src="./clase.png" />
            <p> {flight.cabin_class}</p>
            <img src="./Refund.png" />
            <p>Refundable</p>
            <img src="./Reschedule.png" />
            <p>Reschedule Available</p>
          </div>
          <div>
            <h2 className="subtitle">Price details</h2>
          </div>
          <div>
            <div>
              <p>Adult basic fee</p>
              <p> ${flight.price}</p>
            </div>
            <div>
              <p>Tax</p>
              <p>Included</p>
            </div>
            <div>
              <p>Regular total price</p>
              <p>${flight.price}</p>
            </div>
            <div>
              <p>Save</p>
              <p>$10%</p>
            </div>
            <div>
                <p>Total</p>
                <p>${(parseFloat(flight.price) * 0.9).toFixed(2)}</p>
            </div>
            
        </div>
        </>
        ))}
      </div>
    </div>
  );
};

export default SidebarG2;