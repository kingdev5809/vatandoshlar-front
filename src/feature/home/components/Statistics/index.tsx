import React from "react";
import { StatisticsSectionWrapper } from "./style";
import SectionWrapper from "@/component/SectionWrapper";
import { useTranslations } from "next-intl";

const Statistics = () => {
  const t = useTranslations();

  return (
    <StatisticsSectionWrapper>
      {/* <SectionWrapper title={t("Home.projects")} link="/projects" /> */}
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
