import React  from 'react'
import Ticket from './Ticket'
import styled from 'styled-components'
import { useState, useEffect} from 'react'
import Swal from 'sweetalert2';
import { postMyBooking } from '../ServiceMyBooking/MyBookingService';
import Home from "../../views/Home";
import { useNavigate } from 'react-router-dom';

const DivContainer = styled.div`

    margin-top:3%;
    display: flex;
    width: 99%;
    flex-direction: column;

` 

const DivTitle = styled.div`

    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    grid-gap: 10px;


    p{
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
        font-family: 'Sarabun', sans-serif;
        font-weight: 600;
        color: #6C6CFE;
        font-size: 20px;
        font-style: normal;
        line-height: 10px; /* 150% */

    }
`
const DivSubTitle = styled.div`
    width: 100%;

    p{
        @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
        font-family: 'Sarabun', sans-serif;
        font-weight: 400;
        color: #565E6C;
        font-size: 14px;
        font-style: normal;
        line-height: 22px; /* 157.143% */
        margin-top:0;
    }
`
const DivTicket = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    margin-top: 4%;

`


//Boton booking
const BottomBooking = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    width:97%;
    color: #FEFEFE;
    font-size: 20px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 26px;
    word-wrap: break-word;
    background-color: #11D295;
    margin-top:7%;
    margin-bottom:7%;
    height:44px;
    border-radius:5px;
    border:none;
    display: flex;
    justify-content:center;
    align-items:center;
`;


const Eticket = () => {
    const [datos, setDatos] = useState({});
    const history = useNavigate();
    useEffect(()=>{
        const datosPasajeros = JSON.parse(localStorage.getItem('passager'));
        setDatos(datosPasajeros);

    },[]);

    
    const envioData = async ()=> {
        const postData = await postMyBooking(datos);
        Swal.fire('¡Compra de ticketes exitosa!', 'Disfruta tu viaje', 'success');
        localStorage.removeItem("passager");
        localStorage.removeItem("myTravels");
        history('/home');
    }
    const {name, surname} = JSON.parse(localStorage.getItem('passager'));
    const dataTravel = JSON.parse(localStorage.getItem('myTravels'));
   

    return (
        <DivContainer>
            <div>
                <DivTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.85742 12L10.286 15.4286L17.1431 8.57144" stroke="#6C6CFF" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square" />
                        <path d="M11.9999 21.4286C17.2071 21.4286 21.4284 17.2073 21.4284 12C21.4284 6.79276 17.2071 2.57144 11.9999 2.57144C6.7926 2.57144 2.57129 6.79276 2.57129 12C2.57129 17.2073 6.7926 21.4286 11.9999 21.4286Z" stroke="#6C6CFF" strokeWidth="2.05714" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                    <p>Your flight is booked sucessflly!</p>
                </DivTitle>
                <DivSubTitle>
                    <p>Present E-ticket and valid indentification at check-in</p>
                </DivSubTitle>
            </div>
            <DivTicket>
                <Ticket name={name} surname={surname} dataTravel={dataTravel}/>
                <Ticket name={name} surname={surname} dataTravel={dataTravel}/>
            </DivTicket>
            <div>
                <BottomBooking onClick={()=>envioData()}><p>Send to my e-mail</p></BottomBooking>
            </div>
        </DivContainer>
    )
}

export default Eticket
