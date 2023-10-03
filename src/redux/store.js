
import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./Filter/filterSlice";
import { contactsSlice } from "./Contacts/contactSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});