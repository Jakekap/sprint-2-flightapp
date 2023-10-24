import "../sass/_home.scss";
import { TextField, MenuItem, FormControl, Select } from "@mui/material";
import CalendarButton from "../components/CalendarButton";
import { useState } from "react";
import LocationCard from "../components/LocationCard";
import NewsCard from "../components/NewsCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [click, setClick] = useState({
    btn1: true,
    btn2: false,
  });

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  const handleClickBtn1 = () => {
    setClick({ btn1: true, btn2: false });
  };
  const handleClickBtn2 = () => {
    setClick({ btn1: false, btn2: true });
  };
  return (
    <section className="homeContainer">
      <section className="homeContainer-main">
        <article className="searchPanel">
          <h1 className="title">Find your flight</h1>
          <div className="filters">
            <button className="filters-button">
              <img
                className="filters-button-arrows"
                src="/arrows.svg"
                alt="arrows"
              />
              Round trip
            </button>
            <button className="filters-button">
              <img
                className="filters-button-arrow"
                src="right-arrow.svg"
                alt="right arrow"
              />
              One way
            </button>
            <div className="divider"></div>
            <FormControl>
              <img
                className="filters-button-person"
                src="/one-person.svg"
                alt="one person"
              />
              <Select
                defaultValue={10}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <img
                className="filters-button-ticket"
                src="/ticket.svg"
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
          <div className="search">
            <div className="search-bar">
              <TextField
                placeholder="Houston (HOU)"
                label="From"
                variant="standard"
                className="search-bar-input"
              />
              <figure className="search-bar-switch">
                <img src="/switch.svg" className="search-bar-switch-icon" />
              </figure>
              <TextField
                placeholder="Where is your destination?"
                label="To"
                variant="standard"
                className="search-bar-input"
              />
            </div>
            <button
              onClick={() => handleNavigate("/flight-list")}
              className="search-button"
            >
              <img
                src="/search.svg"
                alt="search"
                className="search-button-icon"
              />
            </button>
          </div>
          <div className="calendar">
            <div className="calendar-buttons">
              <CalendarButton
                onClick={handleClickBtn1}
                clicked={click.btn1}
                label="Departure date"
              />
              <CalendarButton
                onClick={handleClickBtn2}
                clicked={click.btn2}
                label="Returned date"
              />
            </div>
            <div className="calendar-panel">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>
        </article>
        <article className="weatherPanel">
          <div className="weatherPanel-header">
            <p className="weatherPanel-header-day">today</p>
            <div className="weatherPanel-header-divider">
              <div className="weatherPanel-header-divider-rectangle"></div>
            </div>
            <p className="weatherPanel-header-city">Houston</p>
            <p className="weatherPanel-header-state">Texas, United States</p>
            <img src="/sun.svg" className="weatherPanel-header-img" />
            <p className="weatherPanel-header-degree">28°</p>
            <p className="weatherPanel-header-weather">mostly sunny</p>
          </div>
        </article>
        <img className="plane-img" src="/plane.svg" />
      </section>
      <section className="homeContainer-trips">
        <article className="homeContainer-trips-content">
          <div className="homeContainer-trips-top">
            <div className="homeContainer-trips-top-title">
              <img
                className="homeContainer-trips-top-title-icon"
                src="/point.svg"
                alt="point"
              />
              <h2 className="homeContainer-trips-top-title-text">
                Tips from <span>Houston</span>
              </h2>
            </div>
            <button className="homeContainer-trips-top-button">
              Explore destination
            </button>
          </div>
          <div className="homeContainer-trips-cards">
            <div className="map">
              <img src="/map.jpg" className="map-img" />
            </div>
            <LocationCard img="/newyork.jpg" icon="/summer.svg" />
            <LocationCard img="/hollywood.jpg" icon="/summer.svg" />
          </div>
        </article>
      </section>
      <section className="homeContainer-new">
        <article className="homeContainer-new-content">
          <h2 className="homeContainer-new-title">What&apos;s new?</h2>
          <div className="homeContainer-new-cards">
            <NewsCard
              img="/news1.jpg"
              title="US flights delayed due to FAA system outage."
            />
            <NewsCard
              img="/news2.jpg"
              title="Explore and live your best life."
            />
            <NewsCard
              img="/news3.jpg"
              title="Save money on your trip with 5 easy steps."
            />
          </div>
          <button className="homeContainer-new-button">
            Read more articles
          </button>
        </article>
      </section>
    </section>
  );
}
