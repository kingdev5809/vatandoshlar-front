import React from "react";
import { CardContainer, CardImage, CardContent, CardTitle } from "./style";
import Image from "next/image";

interface CardProps {
  data: {
    title: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <CardContainer>
      <CardImage>
        <Image
          src={data.image}
          alt={data.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </CardImage>
      <CardContent>
        <CardTitle>{data.title}</CardTitle>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
