import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import {LocationContext} from "../../../service/location/location.context"

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.brand};

`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer >
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        style={{borderRadius:30}}
      />
    </SearchContainer>
  );
};
