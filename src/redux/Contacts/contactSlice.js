import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
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