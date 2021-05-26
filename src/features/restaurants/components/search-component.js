import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { useLocationContext } from '../../../services/location/customHook';
import { SearchContainer } from './search-component.styles';

export const Search = () => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
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
