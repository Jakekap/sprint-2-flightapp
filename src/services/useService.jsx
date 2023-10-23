import axios from "axios";
import endpoints from "./endpoints";

export const getUserByEmailAndPassword = async (email, password) => {
    try {
        const {data} = await axios.get(endpoints.userByEmailAndPassword(email, password));
        return data.length? data[0]: null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const postRegisterUser = async (nombre, tipodoc, email, password, genero) => {
    try {
        const user = {
            nombre: nombre,
            tipodoc: tipodoc,
            email: email,
            password: password,
            genero: genero
        }
        const {data} = await axios.post(endpoints.registerUser(), user);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}