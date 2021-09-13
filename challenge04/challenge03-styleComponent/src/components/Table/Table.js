import * as S from "./Table.style";

const Table = ({ children }) => {
  return (
    <>
      <S.Table border="1">
        <thead>
          <tr>
            <S.TableCell>Image</S.TableCell>
            <S.TableCell>Brand/Model</S.TableCell>
            <S.TableCell>Year</S.TableCell>
            <S.TableCell>Plate</S.TableCell>
            <S.TableCell>Color</S.TableCell>
            <S.TableCell>Remove</S.TableCell>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </S.Table>
    </>
  );
};

export default Table;
