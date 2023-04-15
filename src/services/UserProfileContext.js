// src/services/UserProfileContext.js
import { createContext } from 'react';

const UserProfileContext = createContext({
  firstNameContext: '',
  lastNameContext: '',
  setFirstNameContext: () => {},
  setLastNameContext: () => {},
});

export default UserProfileContext;
