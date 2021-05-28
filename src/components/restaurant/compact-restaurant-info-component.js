import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';

import { Text } from '../typography/text-component';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 140px;
  align-items: center;
  background-color: white;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant='caption' numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
