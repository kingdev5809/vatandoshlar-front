import { styled } from "styled-components"

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f0f0f0;
`

export const CardContent = styled.div`
  padding: 16px;
`

export const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`