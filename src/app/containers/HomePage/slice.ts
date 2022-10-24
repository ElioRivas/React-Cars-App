import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState={
    topCars: [],
}

const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers:{
        setTopCars: (state, action) => {
            state.topCars = action.payload;
        }
    }
});

export const {setTopCars} = HomePageSlice.actions;
export default HomePageSlice.reducer;