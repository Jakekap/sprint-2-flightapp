import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
import { getdata } from "../ServicesSidebar/Sidebarservices";
import {
  Bold,
  Container1,
  ContainerHour,
  ContainerLeft,
  ContainerRight,
  DivChange,
  DivChangeL,
  DivEconomy,
  DivEconomyModf,
  DivEconomyR,
  DivEconomyRight,
  H1R,
  H2Text,
  H2height,
  Hours,
  ImgAlert,
  ImgCase,
  ImgEcono,
  ImgPoint,
  ImgR,
  LineDiv,
  Pr,
  PrModf,
  TextEconomy,
  Time,
  TitleContainer,
} from "./styleSidebarG1";
import PropTypes from "prop-types";

const SidebarG1 = ({ flightId }) => {
  const [travel, setTravel] = useState([]);

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

  const pasajeros = () => {
    const numAdultos = travel.map((travel) => travel.passenger_count.adults);
    const numChilds = travel.map((travel) => travel.passenger_count.children);
    const numInfans = travel.map((travel) => travel.passenger_count.infants);
    const totalPassagers = numAdultos + "-" + numChilds + "-" + numInfans;
    return totalPassagers;
  };

  return (
    <>
      <Container1>
        <ContainerLeft>
          <ContainerHour>
            <Hours>
              {dayjs(travel.map((trip) => trip.departure_time)).format("LT")}
            </Hours>
            <Time>
              {travel.map((travel) => travel.flight_duration.hours)}h
              {travel.map((travel) => travel.flight_duration.minutes)}
              {`''`}
            </Time>
            <Hours>
              {dayjs(travel.map((trip) => trip.arrival_time)).format("LT")}
            </Hours>
          </ContainerHour>
          <LineDiv></LineDiv>
        </ContainerLeft>
        <ContainerRight>
          <TitleContainer>
            <H1R>{travel.map((trip) => trip.locations.origin_city)}</H1R>
            <H1R>({travel.map((trip) => trip.locations.origin_letter)})</H1R>
          </TitleContainer>
          <Pr>
            {travel.map((trip) => trip.locations.origin_airport)},
            {travel.map((trip) => trip.locations.origin_city)}
          </Pr>
          <DivEconomy>
            <DivEconomyR>
              <ImgR
                src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181859/Sprint%203/Frame_7_gm6zos.png"
                alt="img_Ticket"
              />
              <TextEconomy>
                {travel.map((trip) => trip.flight_code)}
              </TextEconomy>
            </DivEconomyR>
            <DivEconomyR>
              <ImgPoint
                src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                alt="img_Point"
              />
              <TextEconomy>
                {travel.map((trip) => trip.cabin_class)}
              </TextEconomy>
            </DivEconomyR>
          </DivEconomy>
          <DivEconomy>
            <DivEconomyR>
              <DivEconomyR>
                <ImgCase
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181858/Sprint%203/Case_a12cf1.png"
                  alt="imgCase"
                />
                <TextEconomy>Baggage</TextEconomy>
              </DivEconomyR>
              <DivEconomyR>
                <ImgPoint
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                  alt="img_Point"
                />
                <H2height>{travel.map((trip) => trip.weight.baggage)}</H2height>
              </DivEconomyR>
            </DivEconomyR>
            <DivEconomyR>
              <DivEconomyR>
                <ImgCase
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181858/Sprint%203/Case_a12cf1.png"
                  alt="imgCase"
                />
                <TextEconomy>Airbus</TextEconomy>
              </DivEconomyR>
              <DivEconomyR>
                <ImgPoint
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                  alt="img_Point"
                />
                <H2height>{travel.map((trip) => trip.airbus)}</H2height>
              </DivEconomyR>
            </DivEconomyR>
          </DivEconomy>
          <DivEconomyModf>
            <DivEconomyR>
              <DivEconomyR>
                <TextEconomy>Cabin Baggage</TextEconomy>
              </DivEconomyR>
              <DivEconomyR>
                <ImgPoint
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                  alt="img_Point"
                />
                <H2height>{travel.map((trip) => trip.weight.cabin)}</H2height>
              </DivEconomyR>
            </DivEconomyR>
            <DivEconomyR>
              <H2height>{travel.map((trip) => trip.seat_layout)}</H2height>
              <H2height>Seat layout</H2height>
            </DivEconomyR>
          </DivEconomyModf>
          <DivEconomyRight>
            <DivEconomyR>
              <H2height>{travel.map((trip) => trip.inches)}</H2height>
              <H2height>Inches seat pitch (standard)</H2height>
            </DivEconomyR>
          </DivEconomyRight>
          <TitleContainer>
            <H1R>{travel.map((trip) => trip.locations.destination_city)}</H1R>
            <H1R>
              ({travel.map((trip) => trip.locations.destination_letter)})
            </H1R>
          </TitleContainer>
          <PrModf>
            {travel.map((trip) => trip.locations.destination_airport)},
            {travel.map((trip) => trip.locations.destination_city)}
          </PrModf>
        </ContainerRight>
      </Container1>
      <DivChange>
        <DivChangeL>
          <ImgAlert
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698264352/Sprint%203/Alerta_gogplp.png"
            alt="imgAlert"
          />
          <H2Text>
            Stop to change planes in{" "}
            <Bold>{travel.map((trip) => trip.locations.destination_city)}</Bold>
          </H2Text>
        </DivChangeL>
        <h2>{dayjs(travel.map((trip) => trip.arrival_time)).format("LT")}</h2>
      </DivChange>
      <Container1>
        <ContainerLeft>
          <ContainerHour>
            <Hours>
              {dayjs(travel.map((trip) => trip.arrival_time)).format("LT")}
            </Hours>
            <Time>
              {travel.map((travel) => travel.flight_duration.hours)}h
              {travel.map((travel) => travel.flight_duration.minutes)}
              {`''`}
            </Time>
            <Hours>
              {dayjs(travel.map((trip) => trip.departure_time)).format("LT")}
            </Hours>
          </ContainerHour>
          <LineDiv></LineDiv>
        </ContainerLeft>
        <ContainerRight>
          <TitleContainer>
            <H1R>{travel.map((trip) => trip.locations.destination_city)}</H1R>
            <H1R>
              ({travel.map((trip) => trip.locations.destination_letter)})
            </H1R>
          </TitleContainer>
          <Pr>
            {travel.map((trip) => trip.locations.destination_airport)},
            {travel.map((trip) => trip.locations.destination_city)}
          </Pr>
          <DivEconomy>
            <DivEconomyR>
              <ImgR
                src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181859/Sprint%203/Frame_7_gm6zos.png"
                alt="img_Ticket"
              />
              <TextEconomy>
                {travel.map((trip) => trip.flight_code)}
              </TextEconomy>
            </DivEconomyR>
            <DivEconomyR>
              <ImgPoint
                src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                alt="img_Point"
              />
              <TextEconomy>
                {travel.map((trip) => trip.cabin_class)}
              </TextEconomy>
            </DivEconomyR>
            <ImgEcono
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181883/Sprint%203/Icon_Button_2_2_nni3tc.png"
              alt="Img1"
            />
            <ImgEcono
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181886/Sprint%203/Icon_Button_2_1_dvv8px.png"
              alt="Img2"
            />
            <ImgEcono
              src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181888/Sprint%203/Icon_Button_2_nidwvq.png"
              alt="Img3"
            />
          </DivEconomy>
          <DivEconomy>
            <DivEconomyR>
              <DivEconomyR>
                <ImgCase
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181858/Sprint%203/Case_a12cf1.png"
                  alt="imgCase"
                />
                <TextEconomy>Baggage</TextEconomy>
              </DivEconomyR>
              <DivEconomyR>
                <ImgPoint
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                  alt="img_Point"
                />
                <H2height>{travel.map((trip) => trip.weight.cabin)}</H2height>
              </DivEconomyR>
            </DivEconomyR>
            <DivEconomyR>
              <DivEconomyR>
                <ImgCase
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698181858/Sprint%203/Case_a12cf1.png"
                  alt="imgCase"
                />
                <TextEconomy>Airbus</TextEconomy>
              </DivEconomyR>
              <DivEconomyR>
                <ImgPoint
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                  alt="img_Point"
                />
                <H2height>{travel.map((trip) => trip.airbus)}</H2height>
              </DivEconomyR>
            </DivEconomyR>
          </DivEconomy>
          <DivEconomyModf>
            <DivEconomyR>
              <DivEconomyR>
                <TextEconomy>Cabin Baggage</TextEconomy>
              </DivEconomyR>
              <DivEconomyR>
                <ImgPoint
                  src="https://res.cloudinary.com/dhhyc88td/image/upload/v1698188865/Sprint%203/Oval_3_scj0z8.png"
                  alt="img_Point"
                />
                <H2height>{travel.map((trip) => trip.weight.baggage)}</H2height>
              </DivEconomyR>
            </DivEconomyR>
            <DivEconomyR>
              <H2height>{pasajeros()}</H2height>
              <H2height>Seat layout</H2height>
            </DivEconomyR>
          </DivEconomyModf>
          <DivEconomyRight>
            <DivEconomyR>
              <H2height>{travel.map((trip) => trip.inches)}</H2height>
              <H2height>Inches seat pitch (standard)</H2height>
            </DivEconomyR>
          </DivEconomyRight>
          <TitleContainer>
            <H1R>{travel.map((trip) => trip.locations.origin_city)}</H1R>
            <H1R>({travel.map((trip) => trip.locations.origin_letter)})</H1R>
          </TitleContainer>
          <PrModf>
            {travel.map((trip) => trip.locations.origin_airport)},
            {travel.map((trip) => trip.locations.origin_city)}
          </PrModf>
        </ContainerRight>
      </Container1>
    </>
  );
};

export default SidebarG1;
SidebarG1.propTypes = {
  flightId: PropTypes.number,
};
