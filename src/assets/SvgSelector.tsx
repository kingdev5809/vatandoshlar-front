import React from "react";

export type iconsType =
  | "game"
  | "chevron_down"

interface SvgSelectorProps {
  id: iconsType | "";
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
  onClick?: () => void;
}

interface SvgIcons {
  id: iconsType;
  svg: React.ReactNode;
}
interface SvgIconsParamType {
  fill?: string;
  width?: string;
  height?: string;
  stroke?: string;
}
const svgIcons = ({
  fill,
  width,
  height,
  stroke,
}: SvgIconsParamType): SvgIcons[] => [
    {
      id: "game",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={width}
          height={height}
        >
          <path
            width={"40"}
            height={height}
            d="M1.66699 15V5H18.3337V15H1.66699ZM5.83366 12.5H7.50033V10.8333H9.16699V9.16667H7.50033V7.5H5.83366V9.16667H4.16699V10.8333H5.83366V12.5ZM12.0837 12.5C12.4309 12.5 12.7262 12.3786 12.9695 12.1358C13.2128 11.8931 13.3342 11.5978 13.3337 11.25C13.3331 10.9022 13.2117 10.6072 12.9695 10.365C12.7273 10.1228 12.432 10.0011 12.0837 10C11.7353 9.99889 11.4403 10.1206 11.1987 10.365C10.957 10.6094 10.8353 10.9044 10.8337 11.25C10.832 11.5956 10.9537 11.8908 11.1987 12.1358C11.4437 12.3808 11.7387 12.5022 12.0837 12.5ZM14.5837 10C14.9309 10 15.2262 9.87861 15.4695 9.63583C15.7128 9.39306 15.8342 9.09778 15.8337 8.75C15.8331 8.40222 15.7117 8.10722 15.4695 7.865C15.2273 7.62278 14.932 7.50111 14.5837 7.5C14.2353 7.49889 13.9403 7.62056 13.6987 7.865C13.457 8.10944 13.3353 8.40444 13.3337 8.75C13.332 9.09556 13.4537 9.39083 13.6987 9.63583C13.9437 9.88083 14.2387 10.0022 14.5837 10Z"
            fill={fill ?? "white"}
          />
        </svg>
      ),
    },

    {
      id: "chevron_down",
      svg: (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 7.5L10 12.5L15 7.5" stroke={stroke} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      )
    }
  ];

const SvgSelector: React.FC<SvgSelectorProps> = ({
  id,
  width = 24,
  height = 24,
  fill,
  className,
  onClick,
  stroke,
}) => {
  const selectedIcon = svgIcons({ fill }).find((icon) => icon.id === id);

  if (!selectedIcon) return null;

  const icon = React.cloneElement(selectedIcon.svg as React.ReactElement, {
    width,
    height,
    fill,
    stroke,
  });

  if (className || onClick) {
    return (
      <div onClick={onClick} className={className}>
        {icon}
      </div>
    );
  }
  return icon;
};

export default SvgSelector;
