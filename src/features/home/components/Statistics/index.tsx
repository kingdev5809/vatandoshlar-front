import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { useTranslations } from "next-intl";
import { StatisticsSectionWrapper } from "./style";

const Statistics = () => {
  const t = useTranslations();

  return (
    <StatisticsSectionWrapper>
      {/* <SectionWrapper title={t("Home.projects")} link="/projects" /> */}
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
