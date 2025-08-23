import styled from "styled-components";

export const StyledHeroSec = styled.div`
  .hero-sec {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      object-fit: cover;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    .content {
      position: absolute;
      z-index: 1;
      color: white;
      bottom: 80px;
      left: 60px;
      h1 {
        font-size: 2.5rem;
      }
    }
  }

  .public-foundation {
    position: relative;
    margin-top: 60px;
    h1 {
      font-size: 50px;
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center;

      span {
        color: var(--color-primary-dark);
      }
    }

    .content {
      background-color: var(--color-gray-ex-light);
      max-width: 970px;
      width: 70%;
      margin: 0 auto;
      padding: 36px;
      border-radius: 24px;
      p {
        font-size: var(--font-size-lg);
        font-weight: var(400);
        line-height: 32px;
        margin: 0;
      }
    }
  }
`;
