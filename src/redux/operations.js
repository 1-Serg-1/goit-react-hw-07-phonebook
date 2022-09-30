import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6335b74a8aa85b7c5d21a408.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/contacts');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({name, phone}, thunkAPI) => {
    try {
        const res = await axios.post('/contacts', {name, phone});
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});