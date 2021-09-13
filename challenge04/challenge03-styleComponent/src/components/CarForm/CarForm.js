import * as S from "./CarForm.style";

const CarForm = ({ carRegistration, onChange, props, inputRef }) => {
  return (
    <>
      <h2>Car registration</h2>

      <form onSubmit={carRegistration}>
        <S.FormGroup>
          <S.Label htmlFor="image">Image</S.Label>
          <S.Input
            id="image"
            name="image"
            value={props.image}
            type="text"
            onChange={onChange}
            ref={inputRef}
            placeholder="image URL"
          />

          <S.Label htmlFor="brandModel">Brand/Model</S.Label>
          <S.Input
            id="brandModel"
            name="brandModel"
            value={props.brandModel}
            type="text"
            onChange={onChange}
          />

          <S.Label htmlFor="year">Year</S.Label>
          <S.Input
            id="year"
            name="year"
            value={props.year}
            type="number"
            onChange={onChange}
          />

          <S.Label htmlFor="plate">Plate</S.Label>
          <S.Input
            id="plate"
            name="plate"
            value={props.plate}
            type="text"
            onChange={onChange}
          />

          <S.Label htmlFor="color">Color</S.Label>

          <S.Between>
            <S.Input
              id="color"
              name="color"
              value={props.color}
              type="color"
              onChange={onChange}
            />
            <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
          </S.Between>
        </S.FormGroup>
      </form>
    </>
  );
};

export default CarForm;
