import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  width: 95%;
  align-self: center;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Section,
  Rating,
  SectionEnd,
  Icon,
};
