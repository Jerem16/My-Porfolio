import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalContact: false,
    addClass: "",
    tab1080: "1080",
    menuSwitcher: "langClose",
    navScroll: "home",
};

const classesSlice = createSlice({
    name: "classes",
    initialState,
    reducers: {
        setAsideWidth: (state, action) => {
            state.asideWidth = action.payload;
        },

        toggleClasses: (state, action) => {
            if (state.addClass === action.payload) {
                state.addClass = "";
            } else {
                state.addClass = action.payload;
            }
        },
        setModalContact: (state, action) => {
            state.modalContact = action.payload;
        },
        setClass: (state, action) => {
            state.menuSwitcher = action.payload;
        },
        setNavScroll: (state, action) => {
            state.navScroll = action.payload;
        },
    },
});

export const {
    setAsideWidth,
    toggleClasses,
    setClass,
    setNavScroll,
    setModalContact,
} = classesSlice.actions;

export default classesSlice.reducer;
