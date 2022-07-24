import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsUserLoggedIn, selectisLoadingUser } from "../../store/slices/userSlice"
import { Loading } from "../Loading"

type Props = {
    children: JSX.Element
}

export function PublicOnlyRoute({ children }: Props) {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    const isLoadingUser = useSelector(selectisLoadingUser)
    if (isLoadingUser) {
        return <Loading />
    }
    if (isUserLoggedIn) {
        return <Navigate to='/novo-pedido' />
    }
    return children
}