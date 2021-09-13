import Table from "../Table/Table";
import Image from "../Image";
import * as S from "./CarTable.style";

const CarTable = ({ cars, removeCar }) => {
  return cars.length > 0 ? (
    <>
      <Table>
        {cars.map((car) => (
          <tr key={car.plate}>
            <S.TableImage>
              <Image image={car.image} brandModel={car.brandModel} />
            </S.TableImage>
            <S.TableCell>{car.brandModel}</S.TableCell>
            <S.TableCell>{car.year}</S.TableCell>
            <S.TableCell>{car.plate}</S.TableCell>
            <S.TableCell>{car.color}</S.TableCell>
            <S.TableCell>
              <S.ButtonRemove onClick={() => removeCar(car.plate)}>
                ✕
              </S.ButtonRemove>
            </S.TableCell>
          </tr>
        ))}
      </Table>
    </>
  ) : (
    <Table>
      {
        <tr>
          <S.TableCell colSpan="6">There are no registered cars...</S.TableCell>
        </tr>
      }
    </Table>
  );
};

export default CarTable;
