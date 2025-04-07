import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalIsOpen: false,
};

const modalSlice = createSlice({
    name: "classes",
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modalIsOpen = action.payload;
        },
    },
});

export const { setModalContact } = modalSlice.actions;

export default modalSlice.reducer;
