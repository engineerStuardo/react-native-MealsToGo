import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://ep01.epimg.net/economia/imagenes/2019/11/12/actualidad/1573563004_166027_1573571338_noticia_normal.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
});
