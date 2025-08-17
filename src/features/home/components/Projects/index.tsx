import SectionWrapper from "@/Components/SectionWrapper";
import { useTranslations } from "next-intl";
import React from "react";

const Projects = () => {
  const t = useTranslations();

  return (
    <div>
      <SectionWrapper title={t("Home.projects")} link="/projects"/>
      {}
    </div>
  );
};

export default Projects;
