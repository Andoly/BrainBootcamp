import React, { useState, useEffect } from "react";
import CarForm from "./components/CarForm";
import CarTable from "./components/CarTable";
import Container from "./components/Container";
import Toast from "./components/Toast";
import { getCars, delCars } from "./service/apiCars";

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
  const [notice, setNotice] = useState("");

  useEffect(() => {
    renderCars();
  }, [vehicle]);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setNotice("");
    }, 5000);

    return () => clearTimeout(subscribe);
  }, [notice]);

  async function renderCars() {
    const cars = await getCars(url);
    setVehicle(cars);
  }

  async function removeCar(plate) {
    const result = await delCars(url, { plate });

    setNotice(result.message);
    renderCars();
  }

  return (
    <Container>
      <Toast styleClass={notice ? "toastShow" : "toast"} message={notice} />
      <CarForm />
      <CarTable cars={vehicle} removeCar={removeCar} />
    </Container>
  );
}
