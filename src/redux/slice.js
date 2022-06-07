import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer(store, { payload }) {
                store.push(payload)
            },
            prepare(data) {
                const newContact = { ...data, id: nanoid() };
                return {
                    payload: newContact
                }
            }
        },
        removeBook: (store, { payload }) => store.filter(({ id }) => id !== payload),
    }
});

export const { actions } = slice;

export default slice.reducer;