import { Box, Grid } from "@mui/material";
import DatosPassagerDetails from "../components/DatosBooking/DatosPassagerDetails";
import ContainerRight from "../components/ContainerRight/ContainerRight";
import DatosPurchase from "../components/DatosPurchase/DatosPurchase";
import Eticket from "../components/Ticket/Eticket";
import HorizontalLinearAlternativeLabelStepper from "../components/Stepper/Stepper";
import styled from "styled-components";
import { useParams } from 'react-router-dom'

import { useContext } from "react";
import { Context } from "../App";

const ContainerMyBooking = styled.div`
  margin-top: 60px;
  padding-top: 5%;
  padding-left: 8%;
  @media screen and (max-width: 570px) {
    padding-right: 2%;
    padding-left: 2%;
  }
`;

const MyBooking = () => {
  const { value } = useContext(Context);
  const { id } = useParams()

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box>
            <ContainerMyBooking>
              <h1>My booking</h1>
              <HorizontalLinearAlternativeLabelStepper />
              {value == 0 && <DatosPassagerDetails  />}
              {value == 1 && <DatosPurchase />}
              {value == 2 && <Eticket />}
            </ContainerMyBooking>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box>
            <ContainerMyBooking>
              <ContainerRight id={id}/>
            </ContainerMyBooking>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MyBooking;
