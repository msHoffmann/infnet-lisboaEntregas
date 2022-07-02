import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Estimate } from "../../Components/entities/Estimate"
import { RootState } from "../store"

type EstimateState = {
    currentEstimate: Estimate | null
}

const initialState: EstimateState = {
    currentEstimate: null
}

const slice = createSlice({
    name: 'estimate',
    initialState,
    reducers: {
        setCurrentEstimate: (state, action: PayloadAction<Estimate>) => {
            state.currentEstimate = action.payload
        },
        clearCurrentEstimate: () => initialState
        // Significa: clearCurrentEstimate: () => {
        //     state.currentEstimate = null
        // }
    }
})

export const { setCurrentEstimate, clearCurrentEstimate } = slice.actions

export default slice.reducer

export const selectCurrentEstimate = (state: RootState) => state.estimateData.currentEstimate
export const selectHasCurrentEstimate = (state: RootState) => !!state.estimateData.currentEstimate