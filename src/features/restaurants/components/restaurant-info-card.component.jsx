import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";
import star from "../../../../assets/star";
import { SvgXml } from "react-native-svg";

const RestaurantCard = styled(Card)`
  backgroundColor: ${(props) => props.theme.colors.bg.secondary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundColor: ${(props) => props.theme.colors.bg.secondary};
`;
const Title = styled(Text)`
  font-Family: ${(props) => props.theme.fonts.heading};
  font-Size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-Family: ${(props) => props.theme.fonts.body};
  font-Size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-Direction: row;
  padding-Top: ${(props) => props.theme.space[2]};
  padding-Bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ ...restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
