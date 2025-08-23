import styled from "styled-components";

export const StyledHeroSec = styled.div`
  .hero-sec {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .video-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      border-radius: 0;
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
    margin-top: 120px;
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
        line-height: 32px;
      }

      .video-inline {
        margin-top: 24px;
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 16px;
      }
    }
  }
`;
