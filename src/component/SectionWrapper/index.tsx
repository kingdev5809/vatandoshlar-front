import React, { FC } from "react";
import { SectionWrapperStyles } from "./style";
import Link from "next/link";
import { useTranslations } from "next-intl";
interface SectionWrapperProps {
  title: string;
  link?: string;
}
const SectionWrapper: FC<SectionWrapperProps> = ({ link, title }) => {
  const t = useTranslations("");
  return (
    <SectionWrapperStyles>
      <h2>{title}</h2>
      {link && <Link href={link}>{t("Barchasi")}</Link>}
    </SectionWrapperStyles>
  );
};

export default SectionWrapper;
