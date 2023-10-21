import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./views/Page404/Page404";
import Home from "./views/Home";
import FlightList from "./views/FlightList";
import "./sass/global.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import MyBooking from "./views/MyBooking";
import {createContext, useState} from "react"


const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#f44336",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Sarabun",
  },
});

export const Context = createContext("default value");

function App() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      
    <Context.Provider value={{value, setValue}}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="mybooking" element={<MyBooking />} />
          <Route path="destination" element={<Page404 />} />
          <Route path="crew" element={<Page404 />} />
          <Route path="technology" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Context.Provider>
    </ThemeProvider>
      
  );
}

export default App;
