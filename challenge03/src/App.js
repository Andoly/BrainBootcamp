import React, { useState } from "react";
import CarForm from "./components/CarForm";
import CarTable from "./components/CarTable";
import Container from "./components/Container";

const initialRegistration = {
  image: "",
  brandModel: "",
  year: "",
  plate: "",
  color: "#010101",
};

export default function App() {
  const [vehicle, setVehicle] = useState(initialRegistration);

  return (
    <Container>
      <CarForm />
      <CarTable cars={vehicle} />
    </Container>
  );
}
