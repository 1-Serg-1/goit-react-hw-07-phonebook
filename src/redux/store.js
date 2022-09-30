import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './redusers';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer, 
    },
});