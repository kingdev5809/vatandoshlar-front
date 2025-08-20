import styled from "styled-components";

export const StyledNavbar = styled.div`
  .link_side {
    a {
      color: var(--color-white);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 98.523%;
      text-decoration: none;
    }
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
  }

  .stick_desktop {
    top: 0px;
    left: 0;
    position: absolute;
    width: calc(100% - 48px);
    transition: 0.7s ease;
    z-index: 999;
    .navbar {
      backdrop-filter: blur(20px);
      padding: 20px 24px;
      .link_side {
        display: flex;
        align-items: center;

        ul {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style-type: none;
          a {
            position: relative;
          }
        }
      }

      .logo_side {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .logo_side_gif {
          display: none;
        }
        h3 {
          color: var(--color-white);
        }
        .logo_side_svg {
          position: block;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .right-side {
        display: flex;
        align-items: center;
        gap: 20px;
        .burger_menu {
          display: none;
          cursor: pointer;
        }
        p {
          color: var(--color-white);
          font-size: 1rem;
          font-style: normal;
        }
      }
      @media screen and (max-width: 1080px) {
        .right-side {
          .burger_menu {
            display: block;
          }
        }
        .link_side {
          align-items: center;
        }
      }
    }
    &.start_scroll {
      transform: translateY(-300%);
    }
    &.sticky {
      position: fixed;
      transform: translateY(0%);
      top: 0px;
      .navbar {
        margin: 0;
        .link_side {
          ul {
            button {
              color: var(--color-text);
            }
            a {
              color: var(--color-text);
            }
          }
        }
        .logo_side {
          h3 {
            color: var(--color-text);
          }
        }
        .right-side {
          p {
            color: var(--color-text);
          }
        }

        @media screen and (min-width: 1750px) {
        }
        @media screen and (max-width: 1150px) {
        }
        @media screen and (max-width: 620px) {
        }
      }
    }

    .navbar {
    }
  }

  // mobile
  .mobile_nav_blur {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #00000046;
    z-index: 99;
  }
  .mobile_nav {
    position: fixed;
    display: none;
    z-index: 999;
    width: 50%;
    height: 100%;
    background-color: #252525;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.5s ease;
    padding: 20px;
    @media screen and (max-width: 550px) {
      width: 100%;
    }
    .logo_side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 30px;
      .icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      .logo {
        width: 150px;
        height: 45px;
      }
    }
    .link_side {
      padding: 20px 10px;
      border-top: 1px solid gray;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      ul {
        display: flex;
        row-gap: 25px;
        flex-direction: column;

        a {
          font-size: 14px;
        }
      }
    }
    &.active {
      transform: translateX(0);
    }
    @media screen and (max-width: 1080px) {
      display: block;
    }
  }
  .disableScrollHtml {
    overflow: hidden;
  }

  .nav_dropdown {
    position: relative;
    @media (max-width: 1080px) {
      display: none;
    }
    button {
      color: var(--color-white);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 98.523%;
      text-decoration: none;

      border: none;
      background: none;

      display: flex;
      align-items: center;
      justify-content: start;
      cursor: pointer;
    }
    .language_list {
      transform: translateY(-8%);
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 20px !important;
      white-space: nowrap;
      list-style-type: none;
      padding: 10px;
      left: 0px;
      margin: 10px 0;
      visibility: hidden;
      transition: 0.2s ease;
      border-radius: 10px;
      opacity: 0;
      backdrop-filter: blur(80px);
      background: rgba(255, 255, 255, 0.1);
      li {
        color: var(--color-white);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 98.523%;
        text-transform: capitalize;
        cursor: pointer;
      }
    }

    &:hover {
      .selected_language {
        img {
          transform: rotate(180deg);
        }
      }
      .language_list {
        visibility: visible;
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }

  .gif_logo {
    display: none;
    &.active {
      display: block;
    }
  }

  .header_inner {
    padding-top: 200px;
    &.active {
      padding-top: 0px;
    }

    @media (max-width: 768px) {
      padding-top: 150px;
    }
  }

  .arrow_top {
    display: none;
    position: fixed;
    bottom: 120px;
    right: 26px;
    cursor: pointer;

    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    transition: 0.3s;
    opacity: 0;
    transform: translateY(50px);

    border-radius: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.16);
    z-index: 998;

    @media (max-width: 1000px) {
      bottom: 120px;
      right: 26px;
    }

    svg {
      animation: bounce 1.3s infinite;
      width: 24px;
      height: 24px;
    }

    &.active {
      visibility: inherit;
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
  }
`;
