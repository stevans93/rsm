import { createSlice } from "@reduxjs/toolkit";

const municipalitySlice = createSlice({
    name: "municipalities",
    initialState: {
        municipalities: [],
    },

    reducers: {
        storeAllMunicipalities: (state, action) => { 
             state.municipalities = action.payload;
        }
    }
});

export const { storeAllMunicipalities } = municipalitySlice.actions;
export default municipalitySlice.reducer;