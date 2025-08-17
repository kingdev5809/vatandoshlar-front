import React from "react";
import styled from "styled-components";
import { CardContainer, CardContent, CardImage, CardTitle } from "./style";

interface CardProps {
  title: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <CardContainer>
      <CardImage
        src={
          image ||
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        }
        alt={title}
      />
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
