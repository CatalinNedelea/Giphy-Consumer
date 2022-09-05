import React from "react";
import { Image } from "./ImageContainer.style";

export const ImageContainer = (props) => {
  return (
    <Image src={props.src} lineHeight={props.lineHeight} width={props.width} />
  );
};
