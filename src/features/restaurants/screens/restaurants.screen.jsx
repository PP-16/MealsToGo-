import {
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState,useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../service/restaurants/restaurants.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.brand};
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})` background-color: ${(props) => props.theme.colors.brand.brand};`;


export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext)

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          style={{ borderRadius: 25 }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item,index) => index}
      />

    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "green",
    padding: 20,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "beige",
  },
});
