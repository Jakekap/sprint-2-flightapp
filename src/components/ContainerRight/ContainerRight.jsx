import {
  Principal,
  TitlePrice,
  Title,
  ImgDetails,
  Details,
  DivDetails,
  H3Details,
  H3Orage,
  H3Green,
  Div,
  DivCloudy,
  DivDate,
  TitleCloudy,
  ImgDetailCloudy,
  H3Cloudy,
  ImgCloudyOrage,
  H3CloudyOrage,
  H2Numero,
  H2Fecha,
  DivH2,
  ImgBlue,
  H3Blue,
  ImgDestination,
  DivDirect,
  ImgVerde,
  H3Verde,
  Details2,
} from "./StylesContainerRight";
import PropTypes from "prop-types";

import { getMyBookingTravels } from "../ServiceMyBooking/MyBookingService";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";

const ContainerRight = ({ id }) => {
  const [myTravel, setMyTravel] = useState([]);

  useEffect(() => {
    getMyBookingTravels().then((response) => {
      const getTravel = getMytravel(response);
      setMyTravel(getTravel);
    });
  }, []);

  const getMytravel = (listTravels) => {
    const myTravels = listTravels.filter((travel) => travel.id == id);
    return myTravels;
  };

  //funcion que me retorma solo el viaje que estoy buscando

  //FUNCION PARA CALCULAR LOS PRECIOS
  const price = () => {
    const numAdultos = myTravel.map((travel) => travel.passenger_count.adults);
    const numChilds = myTravel.map((travel) => travel.passenger_count.children);
    const numInfans = myTravel.map((travel) => travel.passenger_count.infants);
    const pricePassaers = myTravel.map((travel) => travel.price);

    const totalPassagers = (numAdultos + numChilds + numInfans) * pricePassaers;
    return totalPassagers;
  };

  return (
    <Principal>
      <Div>
        <TitlePrice>
          <ImgDetails
            src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697603917/Sprint2React-Eflight/price_kvl11w.svg"
            alt="imgDetails"
          />
          <Title>Price details</Title>
        </TitlePrice>
        <Details>
          <DivDetails>
            <H3Details>Adult basic fee</H3Details>
            <H3Details>${myTravel.map((travel) => travel.price)}</H3Details>
          </DivDetails>
          <DivDetails>
            <H3Details>Tax</H3Details>
            <H3Details>Included</H3Details>
          </DivDetails>
          <DivDetails>
            <H3Details>Regular total price</H3Details>
            <H3Details>${price()}</H3Details>
          </DivDetails>
          <DivDetails>
            <H3Orage>Save</H3Orage>
            <H3Orage>- ${price() * 0.12}</H3Orage>
          </DivDetails>
        </Details>
        <DivDetails>
          <H3Details>Total</H3Details>
          <H3Green>${price() - price() * 0.12}</H3Green>
        </DivDetails>
      </Div>
      <Div>
        <TitlePrice>
          <ImgDetails
            src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697607271/Sprint2React-Eflight/avion_vwti8f.svg"
            alt="imgavion"
          />
          <Title>
            {" "}
            {myTravel.map((travel) => travel.locations.origin_city)} -{" "}
            {myTravel.map((travel) => travel.locations.destination_city)}
          </Title>
        </TitlePrice>
        <Details>
          <DivDetails>
            <DivCloudy>
              <TitlePrice>
                <ImgDetailCloudy
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697608072/Sprint2React-Eflight/nuve_imlc3g.svg"
                  alt="imgnuve"
                />
                <TitleCloudy>
                  {myTravel.map((travel) => travel.airline)}
                </TitleCloudy>
              </TitlePrice>
              <H3Cloudy>
                {myTravel.map((travel) => travel.locations.origin_letter)} -{" "}
                {myTravel.map((travel) => travel.locations.destination_letter)}
              </H3Cloudy>
              <TitlePrice>
                <ImgCloudyOrage
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697608921/Sprint2React-Eflight/avionnaranjasvg_cxynx2.svg"
                  alt="imgAvionNaranja"
                />
                <H3CloudyOrage>
                  {myTravel.map((travel) => travel.cabin_class)}
                </H3CloudyOrage>
              </TitlePrice>
            </DivCloudy>
            <DivDate>
              <H2Numero>
                {dayjs(myTravel.map((travel) => travel.flight_date)).format(
                  "D"
                )}
              </H2Numero>
              <H2Fecha>
                {dayjs(myTravel.map((travel) => travel.flight_date)).format(
                  "MMM"
                )}
                ,{" "}
                {dayjs(myTravel.map((travel) => travel.flight_date)).format(
                  "YYYY"
                )}
              </H2Fecha>
            </DivDate>
          </DivDetails>
          <DivDetails>
            <DivCloudy>
              <DivH2>
                {dayjs(myTravel.map((travel) => travel.departure_time)).format(
                  "LT"
                )}{" "}
                -{" "}
                {dayjs(myTravel.map((travel) => travel.arrival_time)).format(
                  "LT"
                )}
              </DivH2>
              <TitlePrice>
                <ImgBlue
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697610269/Sprint2React-Eflight/miniReloj_i3t1np.svg"
                  alt="imgRelojBlue"
                />
                <H3Blue>
                  {myTravel.map((travel) => travel.flight_duration.hours)}h
                  {myTravel.map((travel) => travel.flight_duration.minutes)}m
                </H3Blue>
              </TitlePrice>
            </DivCloudy>
            <DivDirect>
              <ImgDestination
                src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697610809/Sprint2React-Eflight/Group_7_vqa5dh.svg"
                alt="imgRaya"
              />
              <TitlePrice>
                <ImgBlue
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697610307/Sprint2React-Eflight/miniAvion_sgkla9.svg"
                  alt="imgAvionBlue"
                />
                <H3Blue>
                  {myTravel.map((travel) => travel.trip_type) == "round_trip"
                    ? "Direct"
                    : "Ecale"}
                </H3Blue>
              </TitlePrice>
            </DivDirect>
          </DivDetails>
        </Details>
        <TitlePrice>
          <ImgVerde
            src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697603917/Sprint2React-Eflight/price_kvl11w.svg"
            alt="imgAvionVerde"
          />
          <H3Verde>Refundable</H3Verde>
        </TitlePrice>
        <TitlePrice>
          <ImgVerde
            src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697611945/Sprint2React-Eflight/maleta_cfvrwv.svg"
            alt="imgMaletaVerde"
          />
          <H3Verde>Reschedule Available</H3Verde>
        </TitlePrice>

        <Details2>
          <DivDetails>
            <DivCloudy>
              <TitlePrice>
                <ImgDetailCloudy
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697608072/Sprint2React-Eflight/nuve_imlc3g.svg"
                  alt="imgnuve"
                />
                <TitleCloudy>Cloudy Airlines</TitleCloudy>
              </TitlePrice>
              <H3Cloudy>LAS - LAX</H3Cloudy>
              <TitlePrice>
                <ImgCloudyOrage
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697608921/Sprint2React-Eflight/avionnaranjasvg_cxynx2.svg"
                  alt="imgAvionNaranja"
                />
                <H3CloudyOrage>Economy</H3CloudyOrage>
              </TitlePrice>
            </DivCloudy>
            <DivDate>
              <H2Numero>10</H2Numero>
              <H2Fecha>Feb, 2024</H2Fecha>
            </DivDate>
          </DivDetails>
          <DivDetails>
            <DivCloudy>
              <DivH2>2:25 - 7:40</DivH2>
              <TitlePrice>
                <ImgBlue
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697610269/Sprint2React-Eflight/miniReloj_i3t1np.svg"
                  alt="imgRelojBlue"
                />
                <H3Blue>2h10m</H3Blue>
              </TitlePrice>
            </DivCloudy>
            <DivDirect>
              <ImgDestination
                src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697610809/Sprint2React-Eflight/Group_7_vqa5dh.svg"
                alt="imgRaya"
              />
              <TitlePrice>
                <ImgBlue
                  src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697610307/Sprint2React-Eflight/miniAvion_sgkla9.svg"
                  alt="imgAvionBlue"
                />
                <H3Blue>Direct</H3Blue>
              </TitlePrice>
            </DivDirect>
          </DivDetails>
        </Details2>
        <TitlePrice>
          <ImgVerde
            src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697603917/Sprint2React-Eflight/price_kvl11w.svg"
            alt="imgAvionVerde"
          />
          <H3Verde>Refundable</H3Verde>
        </TitlePrice>
        <TitlePrice>
          <ImgVerde
            src="https://res.cloudinary.com/dbktnqag9/image/upload/v1697611945/Sprint2React-Eflight/maleta_cfvrwv.svg"
            alt="imgMaletaVerde"
          />
          <H3Verde>Reschedule Available</H3Verde>
        </TitlePrice>
      </Div>
    </Principal>
  );
};

export default ContainerRight;
ContainerRight.propTypes = {
  id: PropTypes.number,
};
