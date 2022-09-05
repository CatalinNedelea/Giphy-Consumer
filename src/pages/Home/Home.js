import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import { ImageContainer } from "../../features/ImageContainer/ImageContainer";
import {
  Container,
  NoData,
  LoadMore,
  LoadContainer,
  NoDataContainer,
  DropdownContainer,
  SelectContainer,
} from "./Home.style";
import { SearchBar } from "../../features/SearchBar/SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import { usePrevious } from "../../hooks/usePrevious";

const LIMIT = 10;

export default function Home() {
  const [GIFs, setGIFs] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 500);
  const prevSearchInput = usePrevious(debouncedValue);
  const [rating, setRating] = useState("g");
  const [language, setLanguage] = useState("en");
  <pre>process.env.REACT_APP_GIPHY_API_KEY</pre>;

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(searchInput));
  }, [searchInput]);

  useEffect(() => {
    if (!debouncedValue) {
      setGIFs([]);
      setPage(1);
    }
    if (prevSearchInput !== debouncedValue) {
      setGIFs([]);
      setPage(1);
    }
  }, [debouncedValue, prevSearchInput]);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${
          process.env.REACT_APP_GIPHY_API_KEY
        }&q=${debouncedValue}&limit=${LIMIT}&offset=${
          (page - 1) * LIMIT
        }&rating=${rating}&lang=${language}`
      )

      .then((response) => {
        response.data.data.forEach((element) => {
          if (!GIFs.some((el) => el.id === element.id)) {
            setGIFs((prevState) => [...prevState, element]);
          }
        });
      })
      .catch((error) => {
        setError(true);
      });
  }, [page, rating, language, debouncedValue]);

  return (
    <>
      <SearchBar
        value={searchInput}
        onChange={(input) => setSearchInput(input)}
      />
      <DropdownContainer>
        <SelectContainer
          placeholder="Rating"
          value={rating}
          name="rating"
          id="rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="g">g</option>
          <option value="pg">pg</option>
          <option value="pg-13">pg-13</option>
          <option value="r">r</option>
        </SelectContainer>

        <SelectContainer
          placeholder="Language"
          value={language}
          name="language"
          id="language"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">en</option>
          <option value="ro">ro</option>
          <option value="fr">fr</option>
          <option value="de">de</option>
        </SelectContainer>
      </DropdownContainer>
      {GIFs.length ? (
        <Container>
          {GIFs.map((gif, index) => (
            <ImageContainer
              key={gif.id}
              src={gif.images.downsized_large.url}
              alt="gif"
              lineHeight={gif.images.downsized_large.height}
              width={gif.images.downsized_large.width}
            />
          ))}
        </Container>
      ) : (
        <NoDataContainer>
          <NoData>Oh no! Where are the GIFs? :O</NoData>
        </NoDataContainer>
      )}

      <LoadContainer>
        <LoadMore
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={!prevSearchInput}
        >
          Load More
        </LoadMore>
      </LoadContainer>
    </>
  );
}
