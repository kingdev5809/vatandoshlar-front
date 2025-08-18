import { styled } from "styled-components";

export const StatisticsSectionWrapper = styled.section`
  padding: 20px 24px;
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 20px;
    margin-top: 20px;
    padding: 12px 96px;
  }
`;
