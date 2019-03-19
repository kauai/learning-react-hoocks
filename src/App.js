import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [location, setLocation] = useState({});
  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude ,longitude })
  }

  return (
    <>
      <span>{location.latitude}</span>
      <br />
      <span>{location.longitude}</span>
    </>
  );
}
