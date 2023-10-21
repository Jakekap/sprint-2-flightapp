import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./views/Page404/Page404";
import Home from "./views/Home";
import FlightList from "./views/FlightList";
import "./sass/global.scss";
import { ThemeProvider, createTheme } from "@mui/material";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flight-list" element={<FlightList />} />
          <Route path="crew" element={<Page404 />} />
          <Route path="technology" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
