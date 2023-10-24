import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";
import {
  InputAdornment,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Drawer,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightListItem from "../components/FlightListItem";
import axios from "axios";
import "../sass/_flightList.scss";
import CalendarIcon from "../components/CalendarIcon";
import SidebarG1 from "../components/SidebarG1";

export default function FlightList() {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [travelId, setTravelId] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = (open, id) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setTravelId(id);
    setOpenDrawer(open);
  };

  const handleBook = () => {
    navigate(`/mybooking/${travelId}`);
  };

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await axios.get("http://localhost:3000/travels");
        setFlightData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos desde la API", error);
        setLoading(false);
      }
    };
    fetchTravels();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <section className="flightList-container">
      <div className="banner">
        <img className="banner-img" src="/banner.png" />
      </div>
      <section className="flightList-main">
        <div className="flightList-main-filters">
          <Filter type="sort" />
          <Filter type="filter" />
        </div>
        <section className="flightList-main-list">
          <div className="flightList-main-list-buttons">
            <FormControl>
              <img
                className="filters-button-person"
                src="/gray-right-arrow.svg"
                alt="type of trip"
              />
              <Select
                defaultValue={10}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={10}>One way</MenuItem>
                <MenuItem value={20}>Round trip</MenuItem>
              </Select>
            </FormControl>
            <button className="filters-button">
              <img
                className="filters-button-arrow"
                src="people.svg"
                alt="people"
              />
              1
            </button>
            <FormControl>
              <img
                className="filters-button-ticket"
                src="/gray-ticket.svg"
                alt="ticket"
              />
              <Select
                defaultValue={10}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={10}>Economy</MenuItem>
                <MenuItem value={20}>Premium</MenuItem>
                <MenuItem value={30}>Business</MenuItem>
                <MenuItem value={40}>First Class</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flightList-main-list-fields">
            <TextField
              className="custom-textfield"
              id="outlined-basic"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/pointer.svg" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <img
              className="flightList-main-list-fields-arrows"
              src="/arrows-alt.svg"
            />
            <TextField
              className="custom-textfield"
              id="outlined-basic"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/pointer.svg" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="custom-datepicker" />
              <DatePicker className="custom-datepicker" />
            </LocalizationProvider>
            <button className="flightList-main-list-fields-search">
              <img src="search.svg" alt="search" />
            </button>
          </div>
          <div className="flightList-main-list-panel">
            <div className="flightList-main-list-panel-items">
              <div className="flightList-main-list-panel-date">
                <p>Fri, 16 Feb</p>
                <p>148 USD</p>
              </div>
              <div className="flightList-main-list-panel-date">
                <p>Sat, 17 Feb</p>
                <p>148 USD</p>
              </div>
              <div className="flightList-main-list-panel-date">
                <p>Sun, 18 Feb</p>
                <p>148 USD</p>
              </div>
              <div className="flightList-main-list-panel-date">
                <p>Mon, 19 Feb</p>
                <p>148 USD</p>
              </div>
              <div className="flightList-main-list-panel-date">
                <p>Tue, 20 Feb</p>
                <p>148 USD</p>
              </div>
            </div>
            <div className="flightList-main-list-panel-icon">
              <CalendarIcon stroke={"white"} width={30} height={30} />
            </div>
          </div>
          <div className="flightList-main-list-items">
            {flightData.map((travel) => {
              return (
                <div key={travel.id}>
                  <FlightListItem
                    travelinfo={travel}
                    handleClick={toggleDrawer(true, travel.id)}
                  />
                  <Divider light />
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <section className="flightList-sidebarBackground">
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
          <SidebarG1 />
          <button onClick={() => handleBook()} className="flightList-book">
            Book now
          </button>
        </Drawer>
      </section>
    </section>
  );
}
