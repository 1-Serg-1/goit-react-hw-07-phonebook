import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true
};

const handleRejected = (state, action) => {
    state.isLoading = false;
            state.error = action.payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    isLoading: false,
    error: null
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.unshift(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(item => item.id === action.payload.id);
            state.items.splice(idx, 1);
        },
        [deleteContact.rejected]: handleRejected,
    }
});

export const contactsReducer = contactsSlice.reducer;

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter:'',
    },
    reducers: {
        filter(state, action) {
            state.filter = action.payload;
        },
        
    },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;



