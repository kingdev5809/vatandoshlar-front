import React, { useState } from "react";
import Image from "next/image";
import { LeftItem, MagazinesSectionWrapper, RightItem, TabItem } from "./style";
import SectionWrapper from "@/component/SectionWrapper";
import { useTranslations } from "next-intl";
import { magazineImage } from "@/assets/images";

const gazetalarData = [
  {
    id: 1,
    title: "Yangi O’zbekiston tili va Adabiyoti fani o’qituvchilari",
    img: "/images/gazeta1.png",
    link: "/gazeta/1",
  },
  {
    id: 2,
    title: "Xorijdagi O’zbek tili va Adabiyoti fani o’qituvchilari",
    img: "/images/gazeta2.png",
    link: "/gazeta/2",
  },
  {
    id: 3,
    title: "Xorijdagi O’zbek tili va Adabiyoti fani o’qituvchilari",
    img: "/images/gazeta3.png",
    link: "/gazeta/3",
  },
];

const Magazines = () => {
  const [activeId, setActiveId] = useState(1);
  const activeGazeta = gazetalarData.find((item) => item.id === activeId);
  const t = useTranslations();

  return (
    <MagazinesSectionWrapper>
      <SectionWrapper title={t("Home.magazines")} link="/#" />
      <div className="wrapper">
        <LeftItem>
          {activeGazeta && (
            <Image
              src={magazineImage}
              alt={"#"}
              //   width={400}
              //   height={500}
              style={{ borderRadius: 12, objectFit: "cover" }}
            />
          )}
        </LeftItem>
        <RightItem>
          {gazetalarData.map((item) => (
            <TabItem
              key={item.id}
              active={item.id === activeId}
              onClick={() => setActiveId(item.id)}
            >
              <p>{item.title}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                Batafsil ↗
              </a>
            </TabItem>
          ))}
        </RightItem>
      </div>
    </MagazinesSectionWrapper>
  );
};

export default Magazines;
