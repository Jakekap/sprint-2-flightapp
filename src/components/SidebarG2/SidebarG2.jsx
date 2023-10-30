import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  DivAdult,
  DivBaggage,
  DivBoxCont,
  DivBoxP,
  DivCloud1,
  DivConditions,
  DivInfo,
  DivPrice,
  DivTitle,
  DivTotalP,
  H1Aerolinea,
  H1Conditions,
  H1Price,
  ImgAvion,
  ImgCloudy,
  ImgFlecha,
  PAdult,
  PAdultBoldOrange,
  PAdultOrange,
  PGreen,
  POrange,
  PPriceA,
  PPriceP,
  PTotalP,
  PTravel,
  SectionG2,
  Span,

} from "./styleSidebarG2";
import { getdata } from "../ServicesSidebar/Sidebarservices";

const SidebarG2 = () => {

  const [flightData, setFlightData] = useState([]);
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    getdata().then((response) => {
      setFlightData(response);
      const getTravel = getMyTravel(response);
      setTravel (getTravel);
    });
  }, []);

  const getMyTravel = (listTravels) =>{
    const myTravel = listTravels.filter((travel)=>travel.id==1);
    return myTravel;
  }   

  const totalDescuento = ()=>{
    const numAdultos = travel.map((travel)=>travel.passenger_count.adults);
    const numChilds = travel.map((travel)=>travel.passenger_count.children);
    const numInfans = travel.map((travel)=>travel.passenger_count.infants);
    const pricePassaers = travel.map((travel)=>travel.price);
    const valorPaajero = (numAdultos +numChilds + numInfans)* pricePassaers;   
    const descuento = (valorPaajero *15)/100;
    return descuento;
}

  const totalPrice = ()=>{
    const numAdultos = travel.map((travel)=>travel.passenger_count.adults);
    const numChilds = travel.map((travel)=>travel.passenger_count.children);
    const numInfans = travel.map((travel)=>travel.passenger_count.infants);
    const pricePassaers = travel.map((travel)=>travel.price);
    const valorPaajero = (numAdultos +numChilds + numInfans)* pricePassaers;
    const totalPassagers = valorPaajero - ((valorPaajero*15)/100);
        
    return totalPassagers;
}

const totalSinDescuento = ()=>{
  const numAdultos = travel.map((travel)=>travel.passenger_count.adults);
  const numChilds = travel.map((travel)=>travel.passenger_count.children);
  const numInfans = travel.map((travel)=>travel.passenger_count.infants);
  const pricePassaers = travel.map((travel)=>travel.price);
  const valorPaajero = (numAdultos +numChilds + numInfans)* pricePassaers;

      
  return valorPaajero;
}
  return (
    <>
      <SectionG2>
        <DivConditions>
          <H1Conditions>Conditions</H1Conditions>
          <DivBoxCont>
            <DivCloud1>
              <DivTitle>
                <ImgCloudy src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181855/Sprint%203/Container_4_xutkeq.png" alt="Img-cloud"/>
                <H1Aerolinea>{travel.map((trip) =>trip.airline)}</H1Aerolinea>
              </DivTitle>
              <PTravel>{travel.map((trip) =>trip.locations.origin_city)}, {travel.map((trip) =>trip.locations.destination_city)}</PTravel>
              <DivInfo>
                <ImgAvion src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181849/Sprint%203/Clase_pmc1ua.png" alt="img-avión"/>
                <POrange>{travel.map((trip) =>trip.cabin_class)}</POrange>
              </DivInfo>
              <DivInfo>
                <ImgAvion
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181847/Sprint%203/Refundable_ecqgjf.png"
                  alt="Img-money"
                />
                <PGreen>Refundable</PGreen>
              </DivInfo>
              <DivInfo>
                <ImgAvion
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698521128/Sprint%203/Reschedule2_bd6spb.png"
                  alt="Img-Calendar"
                />
                <PGreen>Reschedule Available</PGreen>
              </DivInfo>
            </DivCloud1>
            <DivCloud1>
              <DivTitle>
                <ImgCloudy
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698378502/Sprint%203/Container_4_1_e8d6xl.png"
                  alt="Img-cloud"
                />
                <H1Aerolinea>{travel.map((trip) =>trip.airline)}</H1Aerolinea>
              </DivTitle>
              <PTravel>{travel.map((trip) =>trip.locations.destination_city)} , {travel.map((trip) =>trip.locations.origin_city)}</PTravel>
              <DivInfo>
                <ImgAvion
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181849/Sprint%203/Clase_pmc1ua.png"
                  alt="img-avión"
                />
                <POrange>{travel.map((trip) =>trip.cabin_class)}</POrange>
              </DivInfo>
              <DivInfo>
                <ImgAvion src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181847/Sprint%203/Refundable_ecqgjf.png" alt="Img-money" />
                <PGreen>Refundable</PGreen>
              </DivInfo>
              <DivInfo>
                <ImgAvion
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698521128/Sprint%203/Reschedule2_bd6spb.png"
                  alt="Img-Calendar"
                />
                <PGreen>Reschedule Available</PGreen>
              </DivInfo>
            </DivCloud1>
          </DivBoxCont>
        </DivConditions>
        <DivPrice>
          <H1Price>Price Details</H1Price>
          <DivBoxP>
            <div>
              <DivAdult>
                <PAdult>Adult basic fee</PAdult>
                <PPriceA>${travel.map((trip) =>trip.price)}</PPriceA>
              </DivAdult>
              <DivAdult>
                <PAdult>Tax</PAdult>
                <PPriceA>Included</PPriceA>
              </DivAdult>
              <DivAdult>
                <PAdult>Regular total price</PAdult>
                <PPriceA>${totalSinDescuento()}</PPriceA>
              </DivAdult>
              <DivAdult>
                <PAdultOrange>Save</PAdultOrange>
                <PAdultBoldOrange>-${(totalDescuento())}</PAdultBoldOrange>
              </DivAdult>
            </div>
                <Span></Span>
                <DivTotalP>
                    <PTotalP>Total</PTotalP>
                    <PPriceP>${totalPrice()}</PPriceP>
              </DivTotalP>
          </DivBoxP>
        </DivPrice>
        <H1Price>Baggage Price</H1Price>
        <DivBoxCont>
          <DivCloud1>
                <DivTitle>
                    <DivBaggage>
                      <ImgCloudy src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181855/Sprint%203/Container_4_xutkeq.png" alt="Img-cloud"/>
                      <H1Aerolinea>{travel.map((trip) =>trip.airline)}</H1Aerolinea>
                    </DivBaggage>
                    <ImgFlecha src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698522964/Sprint%203/Frame_8_tbktvb.png" alt="ImgIconoflecha" />
                </DivTitle>
                <PTravel>{travel.map((trip) =>trip.locations.origin_city)}, {travel.map((trip) =>trip.locations.destination_city)}</PTravel>
          </DivCloud1>
          <DivCloud1>
                <DivTitle>
                  <DivBaggage>
                    <ImgCloudy src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181855/Sprint%203/Container_4_xutkeq.png" alt="Img-cloud"/>
                    <H1Aerolinea>{travel.map((trip) =>trip.airline)}</H1Aerolinea>
                  </DivBaggage>
                  <ImgFlecha src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698522964/Sprint%203/Frame_8_tbktvb.png" alt="ImgIconoflecha" />
                </DivTitle>
                <PTravel>{travel.map((trip) =>trip.locations.destination_city)} , {travel.map((trip) =>trip.locations.origin_city)}</PTravel>
          </DivCloud1>
        </DivBoxCont>
        
      </SectionG2>
    </>
  );
};

export default SidebarG2;
