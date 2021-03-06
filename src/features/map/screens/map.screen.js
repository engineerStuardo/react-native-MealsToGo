import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';

import { Search } from '../components/search-component';
import { useLocationContext } from '../../../services/location/customHook';
import { useRestaurantsContext } from '../../../services/restaurants/customHook';
import { MapCallout } from '../components/map-callout-component';
import { Map } from '../components/map.screen.styles';

export const MapScreen = ({ navigation }) => {
  const { location } = useLocationContext();
  const { restaurants = [] } = useRestaurantsContext();
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map(restaurant => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
