import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { SectionTitleContainer } from "./styles";

interface SectiontitleProps {
  title: string
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectiontitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  )
}