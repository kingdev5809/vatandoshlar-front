import styled from "styled-components";
export const MagazinesSectionWrapper = styled.div`
  padding: 20px 24px;
  .wrapper {
    display: flex;
    gap: 180px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    padding: 0px 140px;
  }

  @media (max-width: 768px) {
    /* grid-template-columns: 1fr;   */
  }
`;

export const LeftItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const RightItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

export const TabItem = styled.div<{ active: boolean }>`
  border-left: 4px solid ${({ active }) => (active ? "#1665f5" : "transparent")};
  padding-left: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
  max-width: 410px;
  p {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px !important;
    color: ${({ active }) => (active ? "#1665f5" : "#333")};
  }

  a {
    color: #475467 !important;
    display: inline-block;
    margin-top: 6px;
    font-size: 14px;
    color: #1665f5;
    text-decoration: none;
  }
`;
