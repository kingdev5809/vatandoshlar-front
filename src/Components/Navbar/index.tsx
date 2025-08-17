import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { StyledNavbar } from "./style";
import { burgerIcon, chevronDownIcon, searchIcon } from "@/assets/icons";
import { MainLogo } from "@/assets/images";

const Navbar = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [startScrool, setStartScroll] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const t = useTranslations("navbar");
  const location = useRouter();
  const router = useRouter();
  const [activeNot, setActiveNot] = useState(true);
  const [isArrow, setIsArrow] = useState(false);





  const navLinks = [
    {
      link: "/about", key: "about_us", children: [
        { link: "/about", key: "company" },
        { link: "/team", key: "team" }
      ]
    },
    { link: "/associations", key: "associations" },
    {
      link: "/projects", key: "projects", children: [
        { link: "/project_1", key: "project_1" },
        { link: "/project_2", key: "project_2" },
      ]
    },
    { link: "/information_services", key: "information_services" },
  ];

  useEffect(() => {
    if (mobileNavVisible) {
      document.documentElement.classList.add('disableScrollHtml');
    } else {
      document.documentElement.classList.remove('disableScrollHtml');
    }

    return () => {
      document.documentElement.classList.remove('disableScrollHtml');
    };
  }, [mobileNavVisible]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('activeNot');
      setActiveNot(savedState !== null ? JSON.parse(savedState) : true);
    }
  }, []);

  useEffect(() => {
    if (location.pathname == "/") {
      setShowGif(false)
    } else {
      setShowGif(true)
    }

    if (router.pathname === '/blog') {
      setActiveNot(false);
      if (typeof window !== 'undefined') {
        localStorage.setItem('activeNot', JSON.stringify(false));
      }
    }
  }, [location.pathname]);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }

    if (offset >= 600) {
      setIsArrow(true);
    } else {
      setIsArrow(false);
    }

    if (offset > 1000) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <StyledNavbar>
      <div className={`header_inner ${!showGif ? "active" : ""}`}>
        <div
          className={`${scrolled ? "sticky" : ""} stick_desktop ${startScrool ? "start_scroll" : ""}`}
        >
          <div className="container">
            <div className="navbar">
              <div className="logo_side">
                <Image src={MainLogo} alt="logo" width={50} height={50} />
                <h3>
                  &quot;Vatandoshlar&quot; <br /> Jamoat Fondi
                </h3>
              </div>
              <div className="link_side">
                <ul className="link_side_navs">
                  {navLinks.map((item, index) => {
                    if (item.children?.length) {
                      return (
                        <li key={index} className="nav_dropdown">
                          <button>{t(item.key)} <Image src={chevronDownIcon} alt="chevron" width={20} height={20} className="icon" /> </button>
                          <ul className="language_list">
                            {item.children.map((child, childIndex) => (
                              <Link key={childIndex} href={child.link}>
                                {t(child.key)}
                              </Link>
                            ))}
                          </ul>
                        </li>
                      )
                    }
                    return (
                      <Link
                        className={
                          location.pathname.includes(item.link)
                            ? "activeItem"
                            : ""
                        }
                        key={index}
                        href={item.link}
                      >
                        {t(item.key)}
                      </Link>
                    )
                  })}
                </ul>
                {/* <div className="lang_dropdown">
                  <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
                </div> */}
              </div>
              <div className="right-side">
                <Image src={searchIcon} width={20} height={20} className="icon" alt="search" />
                <p className="">Ramzlarimiz</p>
                <button className="btn-primary" >Boglanish</button>
                <div className="burger_menu" onClick={() => setMobileNavVisible(true)}>
                  <Image src={burgerIcon} alt="burger" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${mobileNavVisible ? "active" : ""} mobile_nav`}>
          <div className="logo_side">
            <Link href={"/"} onClick={() => setMobileNavVisible(false)}>
              {/* <Image className="logo" src={napa_logo} alt="napa-logo" /> */}
              Logo
            </Link>
            <div onClick={() => setMobileNavVisible(false)}>
              X
              {/* <Image className="icon" src={CloseButtonSvg} alt="close" /> */}
            </div>
          </div>
          <div className="link_side">
            <ul>
              {navLinks.map((item, index) => (
                <Link
                  onClick={() => setMobileNavVisible(false)}
                  key={index}
                  href={item.link}
                >
                  {t(item.key)}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* <Link href={router.pathname} className={`arrow_top ${isArrow ? "active" : ""}`}>
          <SvgSelector id="arrow_top" />
          TOP
        </Link> */}

        <div
          onClick={() => setMobileNavVisible(false)}
          className={mobileNavVisible ? "mobile_nav_blur" : ""}
        ></div>
      </div>

    </StyledNavbar>
  );
};

export default Navbar;
