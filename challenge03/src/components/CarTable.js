import Table from "./Table";

const CarTable = ({ cars, removeCar }) => {
  return cars.length > 0 ? (
    cars.map((car) => (
      <>
        <Table>
          {
            <tr key={car.plate}>
              <td colSpan="2">
                <img src={car.image} alt={car.brandModel} />
              </td>
              <td colSpan="2">{car.brandModel}</td>
              <td colSpan="2">{car.year}</td>
              <td colSpan="2">{car.plate}</td>
              <td colSpan="2">{car.color}</td>
              <td>
                <button onClick={() => removeCar(car.plate)}>✕</button>
              </td>
            </tr>
          }
        </Table>
      </>
    ))
  ) : (
    <Table>
      {
        <tr>
          <td colSpan="6">There are no registered cars...</td>
        </tr>
      }
    </Table>
  );
};

export default CarTable;
