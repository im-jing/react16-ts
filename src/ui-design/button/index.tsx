import React from "react";
import classNames from "classnames";

type buttonSize = "lg" | "md" | "sm";
type ButtonType = "primary" | "default" | "danger" | "link";
// const disabled: boolean = true | false

interface BaseButtonProps {
  classname?: string;
  btnSize?: buttonSize;
  btnType?: ButtonType;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, btnSize, disabled, children } = props;
  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${btnSize}`]: btnSize,
    "btn-disabled": disabled,
  });
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
