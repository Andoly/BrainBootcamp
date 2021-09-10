import React, { useState, useEffect } from "react";
import CarForm from "./components/CarForm";
import CarTable from "./components/CarTable";
import Container from "./components/Container";
import { getCars } from "./service/apiCars";

const url = "http://localhost:3333/cars";

const initialRegistration = {
  image: "",
  brandModel: "",
  year: "",
  plate: "",
  color: "#010101",
};

export default function App() {
  const [vehicle, setVehicle] = useState(initialRegistration);

  useEffect(() => {
    renderCars();
  }, [vehicle]);

  async function renderCars() {
    const cars = await getCars(url);
    setVehicle(cars);
  }

  return (
    <Container>
      <CarForm />
      <CarTable cars={vehicle} />
    </Container>
  );
}
