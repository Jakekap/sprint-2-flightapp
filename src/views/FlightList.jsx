import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import {
  InputAdornment,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Divider,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightListItem from "../components/FlightListItem";
import axios from "axios";
import "../sass/_flightList.scss";
import CalendarIcon from "../components/CalendarIcon";

export default function FlightList() {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  console.log(flightData);
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
                    companyIcon={`/companyIcons/${travel.airline_icon}.svg`}
                    companyName={travel.airline}
                    price={travel.price.toString()}
                    departureTime={travel.departure_time}
                    arrivalTime={travel.arrival_time}
                    weight={travel.weight.baggage}
                    flightDuration={travel.flight_duration}
                    layovers={travel.layovers.toString()}
                  />
                  <Divider light />
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <section className="flightList-sidebarBackground">
        <section className="flightList-sidebarBackground-sidebar"></section>
      </section>
    </section>
  );
}
