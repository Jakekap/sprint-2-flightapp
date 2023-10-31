import {
  ButtonFooter,
  Closed,
  DivAerolinea,
  DivFl,
  DivFooter,
  DivH3,
  DivImage,
  H1Aerolinea,
  Header,
  ImageContainer,
  ImgAerolinea,
  ImgFooter,
  MiniNavbar,
  Pax,
  Price,
  StyledMain,
} from "./styleSideBar";
import { useState } from "react";
import { useEffect } from "react";
import { getdata } from "../ServicesSidebar/Sidebarservices";
import SidebarG1 from "../SidebarG1/SidebarG1";
import SidebarG2 from "../SidebarG2/SidebarG2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SideBar = ({ flightId, closeSidebar }) => {
  const [isBenefits, setIsBenefits] = useState(false);
  const [travel, setTravel] = useState([]);

  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/mybooking/${flightId}`);
  };

  useEffect(() => {
    getdata().then((response) => {
      const getTravel = getMyTravel(response);
      setTravel(getTravel);
    });
  }, []);
  const getMyTravel = (listTravels) => {
    const myTravel = listTravels.filter((travel) => travel.id == flightId);
    return myTravel;
  };

  const price = () => {
    const numAdultos = travel.map((travel) => travel.passenger_count.adults);
    const numChilds = travel.map((travel) => travel.passenger_count.children);
    const numInfans = travel.map((travel) => travel.passenger_count.infants);
    const pricePassaers = travel.map((travel) => travel.price);
    const valorPaajero = (numAdultos + numChilds + numInfans) * pricePassaers;
    const totalPassagers = valorPaajero - (valorPaajero * 15) / 100;
    return totalPassagers;
  };
  return (
    <StyledMain>
      <Header>
        <DivAerolinea>
          <ImgAerolinea
            src={`/companyIcons/${travel?.[0]?.airline_icon}.svg`}
            id="img"
          />
          <H1Aerolinea>{travel.map((trip) => trip.airline)}</H1Aerolinea>
        </DivAerolinea>
        <button onClick={() => closeSidebar(false)}>
          <Closed
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181828/Sprint%203/Frame_6_bx3bff.png"
            alt="imgclosed"
          />
        </button>
      </Header>
      <MiniNavbar>
        <ImageContainer onClick={() => setIsBenefits(false)}>
          <DivImage
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698503640/Sprint%203/Alert2_kp4kpn.png"
            alt="imgFly"
          />
          <DivH3>Flight details</DivH3>
        </ImageContainer>
        <ImageContainer onClick={() => setIsBenefits(true)}>
          <DivImage
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181902/Sprint%203/Frame_1_omgtzc.png"
            alt="imgBenefit"
          />
          <DivH3>Benefits</DivH3>
        </ImageContainer>
        <ImageContainer>
          <DivImage
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181897/Sprint%203/Frame_2_mrl1tl.png"
            alt="imgRefund"
          />
          <DivH3>Refund</DivH3>
        </ImageContainer>
        <ImageContainer>
          <DivImage
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181898/Sprint%203/Frame_3_czywsh.png"
            alt="imgReschedule"
          />
          <DivH3>Reschedule</DivH3>
        </ImageContainer>
      </MiniNavbar>
      {!isBenefits ? (
        <SidebarG1 flightId={flightId} />
      ) : (
        <SidebarG2 flightId={flightId} />
      )}
      <DivFooter>
        <DivFl>
          <Price>${price()}</Price>
          <Pax>/ pax</Pax>
        </DivFl>
        <DivFl>
          <ImgFooter
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181880/Sprint%203/Share_sm2vtq.png"
            alt="imgf"
          />
          <ButtonFooter onClick={() => handleBook()}>Book now</ButtonFooter>
        </DivFl>
      </DivFooter>
    </StyledMain>
  );
};

export default SideBar;
SideBar.propTypes = {
  flightId: PropTypes.number,
  closeSidebar: PropTypes.func,
};
