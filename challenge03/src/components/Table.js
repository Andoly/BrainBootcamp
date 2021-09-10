import React from "react";

const Table = ({ children }) => {
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Image</th>
            <th>Brand/Model</th>
            <th>Year</th>
            <th>Plate</th>
            <th>Color</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};

export default Table;
