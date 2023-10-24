import axios from "axios";
export const getdata = async () => {
  try {
    const { data } = await axios.get("https://flightapp-miniback.onrender.com/travels");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getusers = async () => {
  try {
    const { data } = await axios.get("https://flightapp-miniback.onrender.com/users");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getpassagers = async () => {
  try {
    const { data } = await axios.get("https://flightapp-miniback.onrender.com/passagers");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
