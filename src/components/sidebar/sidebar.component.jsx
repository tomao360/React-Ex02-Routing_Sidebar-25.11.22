import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreation from "@mui/icons-material/MovieCreation";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import FaceIcon from "@mui/icons-material/Face";

import "./sidebar.css";

export const SidebarComponent = (props) => {
  return (
    <ul className="container">
      <li>
        <Link to="/">
          <HomeIcon className="icon" />
          <div className="section-name">Home Page</div>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <InfoIcon className="icon" />
          <div className="section-name">About</div>
        </Link>
      </li>
      <li>
        <Link to="/contact-us">
          <CallIcon className="icon" />
          <div className="section-name">Contact Us</div>
        </Link>
      </li>
      <li>
        <Link to="/movies">
          <MovieCreation className="icon" />
          <div className="section-name">Movies</div>
        </Link>
      </li>
      <li>
        <Link to="/games">
          <SmartToyIcon className="icon" />
          <div className="section-name"> Games</div>
        </Link>
      </li>
      <li>
        <Link className="nav-link disabled"></Link>
      </li>
      <li>
        <Link className="nav-link disabled"></Link>
      </li>
      <li>
        <Link className="nav-link disabled"></Link>
      </li>
      <li>
        <Link to="/tamara">
          <FaceIcon className="icon" />
          <div className="section-name"> Tamara</div>
        </Link>
      </li>
    </ul>
  );
};
