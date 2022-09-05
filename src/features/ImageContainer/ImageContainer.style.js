import styled from "styled-components";

export const Image = styled.div`
  height: ${(props) => props.lineHeight}px;
  width: ${(props) => props.width}px;
  background: ${(props) => `url(${props.src})`};
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 100%;
`;
