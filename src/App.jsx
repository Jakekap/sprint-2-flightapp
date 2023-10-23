import { createContext, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./views/Page404/Page404";
import Home from "./views/Home";
import FlightList from "./views/FlightList";
import "./sass/global.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import MyBooking from "./views/MyBooking";
import Login from "./views/Login";
import SidebarG1 from "./components/SidebarG1";
import Register from "./views/Register";
import userLoggedReducer, {
  userLoggedInitial,
} from "./reducer/userLoggedReducer";
import PrivatedRoutes from "./router/privateRouter";
import PublicRoutes from "./router/publicRouter";

export const AppContext = createContext();
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#f44336",
    },
    purple: {
      main: "#6C6CFE",
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
  const [userLogged, userLoggedDispatch] = useReducer(
    userLoggedReducer,
    userLoggedInitial
  );

  const globalStates = {
    userLogged: { userLogged, userLoggedDispatch },
  };

  const [value, setValue] = useState(0);
  return (
    <AppContext.Provider value={globalStates}>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ value, setValue }}>
          <Routes>
            <Route>
              <Route element={<Layout />}>
                <Route
                  element={
                    <PrivatedRoutes
                      isAuthenticate={userLogged.isAuthenticated}
                    />
                  }
                >
                  <Route path="mybooking" element={<MyBooking />} />
                </Route>
                <Route
                  element={
                    <PublicRoutes isAuthenticate={userLogged.isAuthenticated} />
                  }
                >
                  <Route path="flight-list" element={<FlightList />} />
                  <Route path="sidebar" element={<SidebarG1 />} />
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="*" element={<Page404 />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Context.Provider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
