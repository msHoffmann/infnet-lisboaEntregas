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

export type RootState = ReturnType<typeof store.getState>
// Linha acima significa:
// type RootState = {
//     userData: UserState,
//     cardData: CartState
// }