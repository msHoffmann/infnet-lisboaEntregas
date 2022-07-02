import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import estimateReducer from "./slices/EstimateSlice";

const store = configureStore({
    reducer: {
        userData: userReducer,
        estimateData: estimateReducer
    }
})

export default store

export type RootState = ReturnType <typeof store.getState>
// Significa:
// type RootState = {
//     userData: UserState,
//     cardData: CartState
// }