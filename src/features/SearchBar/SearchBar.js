import React from "react";
import { Container, Title, Input } from "./SearchBar.style";

export function SearchBar(props) {
  return (
    <Container>
      <Title>Search :</Title>
      <Input
        placeholder="Name"
        value={props.value}
        name="name"
        id="name"
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </Container>
  );
}
