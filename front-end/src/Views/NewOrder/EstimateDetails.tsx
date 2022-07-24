import { useSelector } from "react-redux"
import { selectHasCurrentEstimate } from "../../store/slices/EstimateSlice"
import { EstimateMap } from "./EstimateMap"
import { EstimateNumbers } from "./EstimateNumbers"
import styled from "styled-components"
import { EstimateFinish } from "./EstimateFinish"

export function EstimateDetails() {
  const hasCurrentEstimate = useSelector(selectHasCurrentEstimate)
  if (!hasCurrentEstimate) {
    return (
      <WithoutEstimateStyled className="d-none d-md-flex">
        <p className="m-0">Preencha os dados ao lado para ver preço</p>
      </WithoutEstimateStyled>
    )
  }
  return (
    <WithEstimateStyled>
      <EstimateMap />
      <EstimateNumbers />
      <EstimateFinish />
    </WithEstimateStyled>
  )
}

const WithoutEstimateStyled = styled.div`
  background-color: #efefef;
  border: 3px #000;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  text-align: center;
`

const WithEstimateStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`