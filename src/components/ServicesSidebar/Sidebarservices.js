import axios from "axios";
export const getdata = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/travels");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getusers = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/users");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getpassagers = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/passagers");

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
