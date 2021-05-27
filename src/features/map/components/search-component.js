import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { useLocationContext } from '../../../services/location/customHook';
import { SearchContainer } from './search-component.styles';

export const Search = () => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        icon='map'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
