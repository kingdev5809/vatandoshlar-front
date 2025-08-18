import { styled } from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    /* transform: translateY(-6px); */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin: 0;
`;
