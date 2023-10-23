import axios from "axios";
import endPoints from "./endPoint";

export const getMyBookingTravels = async() =>{
    try {
        const {data} = await axios.get(endPoints.travels);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const postMyBooking = async(dataPassager)=>{
    try {
        const {data} = await axios.post(endPoints.passagers, dataPassager);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}