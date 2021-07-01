import React, { FC } from "react";
import "./button.css"

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <div data-testid="button">Hi {label}</div>;
};

export { Button };
