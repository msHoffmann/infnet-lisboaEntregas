import { addDoc, collection } from "firebase/firestore"
import { Address } from "../Components/entities/Address"
import { Estimate } from "../Components/entities/Estimate"
import { calculateDistance } from "./calculateDistance"
import { db } from "./firebase"

export type NewEstimateInput = {
    pickupAddress: Address
    deliveryAddress: Address
    comments: string
}

export const createEstimate = async ({ pickupAddress, deliveryAddress, comments }: NewEstimateInput): Promise<Estimate> => {
    const { duration, distance: meters } = await calculateDistance({
        origin: pickupAddress,
        destination: deliveryAddress
    })
    const minutes = Math.ceil(duration / 60)
    // Math.ceil = retorna para cima
    // Math.Floor = retorna para baixo
    // Math.Round = 0.5 arredona para cima, 0.4 arrendoda para baixo
    const value = getValue(meters, minutes)
    const estimateData = {
        minutes,
        meters,
        value,
        pickupAddress,
        deliveryAddress,
        comments,
    }
    const res = await addDoc(collection(db, 'estimates'), estimateData)
    return {
        id: res.id,
        ...estimateData
    }
}

const getValue = (meters: number, minutes: number) => {
    let value = 1.5
    value += minutes * 0.25
    value += minutes * 0.001
    const min = 4.5
    if (value < min) {
        return min
    }
    return parseFloat(value.toFixed(2))
}
