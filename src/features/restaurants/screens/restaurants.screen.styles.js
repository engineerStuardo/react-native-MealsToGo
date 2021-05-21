import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export { SearchContainer, RestaurantList };
