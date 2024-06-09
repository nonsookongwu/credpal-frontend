import { ReactNode } from "react";
import { ButtonStyle } from "./Button.styles";

interface Props {
  disabled?: boolean;
  children: ReactNode;
  width?: "100%";
  border?: string;
  bgColor?: string;
  color?: string;
  borderRadius: string;
  onClick?: () => void;
  type?: "reset" | "button" | "submit" | undefined;
}

const CustomButton = ({
  disabled,
  children,
  width,
  onClick,
  border,
  bgColor,
  color,
  type,
  borderRadius
}: Props) => {
  return (
    <ButtonStyle
      width={width}
      disabled={disabled}
      $bgColor={bgColor}
      onClick={onClick}
      $border={border}
      $color={color}
      type={type}
      $borderRadius={borderRadius}
    >
      {children}
    </ButtonStyle>
  );
};

export default CustomButton;
