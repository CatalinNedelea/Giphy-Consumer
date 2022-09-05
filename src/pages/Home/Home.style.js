import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 1rem;
  align-items: center;
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
`;

export const SelectContainer = styled.select`
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  background-color: #e6e6fa;
  color: black;
  padding: 0.2rem;
  font-size: 1rem;
  cursor: pointer;
  border: 0.1rem solid black;
  box-shadow: 0rem 0.8rem 2rem 0rem rgba(0, 0, 0, 0.2);
  border-radius: 3rem;
`;

export const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoData = styled.h3`
  color: #b0c4de;
  font-weight: 1rem;
  font-size: 3rem;
  text-align: center;
`;

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMore = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  width: auto;
  z-index: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;

  :hover {
    background: #f6f9fe;
    color: blue;
  }
`;
