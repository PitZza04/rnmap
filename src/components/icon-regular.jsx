import React from "react";
import SvgIcon from "./svg-icon";

export const IconRegular = ({ stroke, focused, name, ...rest }) => {
  if (focused) {
    return (
      <SvgIcon
        {...rest}
        name={name ?? "closeCircle"}
        stroke={stroke}
        viewBox="0 0 24 24"
      />
    );
  }
  return <SvgIcon {...rest} fill="none" viewBox="0 0 24 24" />;
};

export const IconBold = ({ name, ...props }) => (
  <SvgIcon {...props} name={name ?? "closeCircle"} viewBox="0 0 24 24" />
);

export const IconLight = ({ name, ...props }) => (
  <SvgIcon {...props} name={name ?? "closeCircle"} viewBox="0 0 24 24" />
);
