import React from "react";
import { useState } from "react";
import { postCars } from "../service/apiCars";

const url = "http://localhost:3333/cars";

const initialRegistration = {
  image: "",
  brandModel: "",
  year: "",
  plate: "",
  color: "#010101",
};

const CarForm = () => {
  const [car, setCar] = useState(initialRegistration);

  function onChange(e) {
    const { name, value } = e.target;

    setCar({ ...car, [name]: value });
  }

  async function carRegistration(e) {
    e.preventDefault();
    const result = await postCars(url, car);

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
  }

  return (
    <>
      <h2>Car registration</h2>

      <form onSubmit={carRegistration}>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            value={car.image}
            type="text"
            onChange={onChange}
          />

          <label htmlFor="brandModel">Brand/Model</label>
          <input
            id="brandModel"
            name="brandModel"
            value={car.brandModel}
            type="text"
            onChange={onChange}
          />

          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            value={car.year}
            type="number"
            onChange={onChange}
          />

          <label htmlFor="plate">Plate</label>
          <input
            id="plate"
            name="plate"
            value={car.plate}
            type="text"
            onChange={onChange}
          />

          <label htmlFor="color">Color</label>

          <div className="between">
            <input
              id="color"
              name="color"
              value={car.color}
              type="color"
              onChange={onChange}
            />
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CarForm;
