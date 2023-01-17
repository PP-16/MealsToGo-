import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Text } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  marginTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
  backgroundColor: #e6e6fa;
`;

const RestaurantListContainer = styled.View`
  flex: 1px;
  padding: 16px;
  backgroundColor: #e6e6fa;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            style={{
              borderRadius: 30,
              backgroundColor: "#fffff0",
              marginTop: 15,
            }}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            elevation={2}
          />
        </SearchContainer>
      </SafeArea>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: "#e6e6fa",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e6e6fa",
  },
});
