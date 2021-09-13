import React, { useState } from "react";

const Image = ({ image, brandModel }) => {
  const [url, setUrl] = useState(image);

  return (
    <img
      src={url}
      alt={brandModel}
      onError={() =>
        setUrl(
          "https://folhaz.com.br/wp-content/uploads/2019/01/exposicao-de-fuscas-goiania.jpg"
        )
      }
    />
  );
};

export default Image;
