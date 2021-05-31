import { useContext } from 'react';

import { AuthenticationContext } from './authentication-context';

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
