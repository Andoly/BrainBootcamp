const CarForm = ({ carRegistration, onChange, props, inputRef }) => {
  return (
    <>
      <h2>Car registration</h2>

      <form onSubmit={carRegistration}>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            value={props.image}
            type="text"
            onChange={onChange}
            ref={inputRef}
            placeholder="image URL"
          />

          <label htmlFor="brandModel">Brand/Model</label>
          <input
            id="brandModel"
            name="brandModel"
            value={props.brandModel}
            type="text"
            onChange={onChange}
          />

          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            value={props.year}
            type="number"
            onChange={onChange}
          />

          <label htmlFor="plate">Plate</label>
          <input
            id="plate"
            name="plate"
            value={props.plate}
            type="text"
            onChange={onChange}
          />

          <label htmlFor="color">Color</label>

          <div className="between">
            <input
              id="color"
              name="color"
              value={props.color}
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
