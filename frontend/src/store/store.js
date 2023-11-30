import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import municipalitySlice from "./municipalitySlice";

const store = configureStore({
    reducer: {
        userStore: userSlice,
        municipalityStore: municipalitySlice,
    },
});

export default store;