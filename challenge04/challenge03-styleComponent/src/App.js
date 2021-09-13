import React, { useState, useEffect, useRef } from "react";
import CarForm from "./components/CarForm/CarForm";
import CarTable from "./components/CarTable";
import Container from "./components/Container";
import Toast from "./components/Toast";
import { postCars, getCars, delCars } from "./service/apiCars";

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
  const [car, setCar] = useState(initialRegistration);
  const [notice, setNotice] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    renderCars();
  }, []);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setNotice("");
    }, 5000);

    return () => clearTimeout(subscribe);
  }, [notice]);

  async function publishCar(e) {
    e.preventDefault();
    const result = await postCars(url, car);
    setNotice(result.message);

    if (result.error) {
      return result.error;
    } else {
      setCar({
        image: "",
        brandModel: "",
        year: "",
        plate: "",
        color: "#010101",
      });
    }

    renderCars();
    inputRef.current.focus();
  }

  async function renderCars() {
    const cars = await getCars(url);
    setVehicle(cars);
  }

  async function removeCar(plate) {
    const result = await delCars(url, { plate });

    setNotice(result.message);
    renderCars();
  }

  function onChange(e) {
    const { name, value } = e.target;

    setCar({ ...car, [name]: value });
  }

  return (
    <Container>
      <Toast styleClass={notice ? "toastShow" : "toast"} message={notice} />
      <CarForm
        carRegistration={publishCar}
        props={car}
        onChange={onChange}
        inputRef={inputRef}
      />
      <CarTable cars={vehicle} removeCar={removeCar} />
    </Container>
  );
}
