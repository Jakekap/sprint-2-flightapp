import React from 'react'
import styled from 'styled-components'

const DivFrame = styled.g`
  display: flex;
  flex-direction: row;
  fill: #0D78C8;  
 
`
const TextCloudy = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 600;
  color: #323842;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */
  
`
const TextHora = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 500;
  fill: #2424FE;
  font-size: 32px;
  font-style: normal;
  line-height: 48px;


`
const TextClase = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 400;
  fill: #FE902B;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */

`
const TextDestino = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 500;
  fill: #171A1F;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */
`
const TextFecha = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 400;
  fill: #8F949F;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */
`
const TextCheckIn = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 400;
  fill: #171A1F;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */
`

const TextPasajero = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 400;
  fill: #8F949F;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */
`
const TexTNombre = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 400;
  color: #171A1F;
  font-size: 16px;
  font-style: normal;
  line-height: 26px;
  text-transform: uppercase;
`
const DivLogo = styled.g`
  display: flex;
  flex-direction: row;
`
const TextLogo = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 600;
  fill: #FEFEFE;
  font-size: 20px;
  font-style: normal;
  line-height: 30px; 
`
const TextBooking = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 500;
  fill: #FEFEFE;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; 
`
const TextId = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 500;
  fill: #FEFEFE;
  font-size: 24px;
  font-style: normal;
  line-height: 36px;
`
const TextArline = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 500;
  fill: #FEFEFE;
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
`
const TextTime = styled.text`
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
  font-family: 'Sarabun', sans-serif;
  font-weight: 400; 
  fill: #6E7786;
  font-size: 14px;
  font-style: normal;
  line-height: 22px; /* 157.143% */
`
const TextCode = styled.text`
  fill: #FEFEFE;
  font-family: Sarabun;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; 
`
const DivPeso = styled.g`
  display: flex;
  width: 54px;
  height: 28px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px;
  fill: #DDE0E5;
`
const DivTicket = styled.div`
  width:100%;
`
const SvgTicket = styled.svg`
  width:95%;
`

function Ticket() {

  return (
    <DivTicket>
      <SvgTicket xmlns="http://www.w3.org/2000/svg" width="782" height="342" viewBox="0 0 782 342" fill="black">
        <path d="M-0.858398 207.26V307.177C-0.804556 326.77 15.2358 342.64 35.039 342.694H557.144C557.511 336.266 562.887 331.24 569.394 331.24C575.901 331.24 581.276 336.266 581.644 342.694H747.411C767.214 342.64 783.254 326.77 783.308 307.177V34.5256C783.249 14.9363 767.21 -0.927864 747.411 -0.98111H581.673C581.305 5.44655 575.93 10.4724 569.423 10.4724C562.916 10.4724 557.541 5.44655 557.173 -0.98111H35.039C15.2396 -0.927864 -0.799175 14.9363 -0.858398 34.5256V134.453" fill="#F8F9FA" />
        <g>
          <image x="34" y="32" width="20" height="20" xlinkHref="./Frame.png" />
          <TextCloudy x="60" y="47" fontSize="16" fill="black">Cloudy Airlines</TextCloudy>
        </g>

        <g>
          <TextPasajero x="34" y="90" fontSize="16" fill="black">Passenger:</TextPasajero>
          <TexTNombre x="100" y="90" fontSize="16" fill="black">Anna Anderson</TexTNombre>
        </g>

        <g>
          <image x="34" y="115" width="20" height="20" xlinkHref="./iconAvion.png" />
          <TextClase x="60" y="130" fontSize="16" fill="black">Economy</TextClase>
        </g>
        <TextHora x="34" y="170">23:15</TextHora>
        <TextHora x="324" y="170">01:25</TextHora>
        <TextDestino x="34" y="190" fontSize="16" fill="black">Houston (HOU)</TextDestino>
        <TextDestino x="324" y="190" fontSize="16" fill="black">Las Vegas (LAS)</TextDestino>
        <TextFecha x="34" y="210" fontSize="16" fill="black">9 Feb, 2023</TextFecha>
        <TextFecha x="324" y="210" fontSize="16" fill="black">10 Feb, 2023</TextFecha>
        <TextCheckIn x="24" y="330" fontSize="16" fill="black">Check-in: 9th Feb 2023 at 21:20</TextCheckIn>
        <g>
          <svg xmlns="http://www.w3.org/2000/svg" x="75" y="240" width="223" height="2" viewBox="0 0 223 2" fill="none">
            <path d="M223 1H0" stroke="#6C6CFE" />
          </svg>
          <text x="167" y="270" fontSize="16" fill="black">2h10m</text>
        </g>
        <g>
          <image x="410" y="42" width="16" height="16" xlinkHref="./shop.png" />

          <DivPeso fill="#DDE0E5" opacity="0.7">
            <text x="436" y="55" fontSize="16" fill="black">2x23kg</text>
          </DivPeso>

          <DivPeso  fill="#DDE0E5" opacity="0.7">
            <text x="495" y="55" fill="black">1x7kg</text>
          </DivPeso>
        </g>
        <TextTime x="350" y="330" fontSize="16" fill="black">*All time displayed are local</TextTime>
        {/* Aqui empieza la parte derecha del boleto */}
        <svg x="569" y="0" xmlns="http://www.w3.org/2000/svg" width="213" height="342" viewBox="0 0 213 342" fill="none">
          <path d="M11.9398 342.694H177.677C197.481 342.64 213.521 326.77 213.575 307.177V34.5256C213.516 14.9363 197.477 -0.927864 177.677 -0.98111H11.9398C11.9357 5.43088 6.88444 10.7302 0.415039 11.1098V330.593C6.88821 330.973 11.9408 336.278 11.9398 342.694Z" fill="#0A7956" />
          <DivLogo>
            <image x="44" y="24" width="35" height="35" xlinkHref="./Image 9.png" /> 
            <TextLogo x="92" y="50" fontSize="16" fill="black">E-flight</TextLogo>
          </DivLogo>
          <TextBooking x="23" y="83" fontSize="16" fill="black">Booking ID</TextBooking>
          <TextId x="23" y="110" fontSize="16" fill="black">65980165 </TextId>
          <TextArline x="23" y="160" fontSize="16" fill="black">Airline Booking Code</TextArline>
          <TextCode x="23" y="187" fontSize="16" fill="black">CA-6018</TextCode>
        </svg>
      </SvgTicket>
    </DivTicket>
  )
}

export default Ticket