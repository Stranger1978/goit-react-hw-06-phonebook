import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        del(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { add, del } = contactsSlice.actions;

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        change(state, action) {
            state.filter = action.payload;
        }
    }
});

export const { change } = filterSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});