import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { useLocationContext } from '../../../services/location/customHook';
import { SearchContainer } from './search-component.styles';

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggled}
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
