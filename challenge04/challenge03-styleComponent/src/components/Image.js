import React, { useState } from "react";
import styled from "styled-components";

const ImageStyle = styled.img`
  max-width: 222px;
  border-radius: 5px;
`;

const Image = ({ image, brandModel }) => {
  const [url, setUrl] = useState(image);

  return (
    <ImageStyle
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
