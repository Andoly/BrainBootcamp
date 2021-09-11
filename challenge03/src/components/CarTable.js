import Table from "./Table";
import Image from  './Image'

const CarTable = ({ cars, removeCar }) => {
  return cars.length > 0 ? (
    <>
      <Table>
        {cars.map((car) => (
          <tr key={car.plate}>
            <td>
              <Image image={car.image} brandModel={car.brandModel} />
            </td>
            <td>{car.brandModel}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td>{car.color}</td>
            <td>
              <button
                className="removeCar"
                onClick={() => removeCar(car.plate)}
              >
                ✕
              </button>
            </td>
          </tr>
        ))}
      </Table>
    </>
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
