import styled from "styled-components";
import { selectCurrentEstimate } from "../../store/slices/EstimateSlice";
import { useSelector } from "react-redux";

export function EstimateNumbers() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    if (!currentEstimate) {
        return null
    }
    return (
        <WrapStyled>
            <NumberItem>
                <span>Tempo</span>
                {currentEstimate.minutes} min
            </NumberItem>
            <NumberItem>
                <span>Distância</span>
                {(currentEstimate.meters / 1000).toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} km
            </NumberItem>
            <NumberItem>
                <span>Valor</span>
                {(currentEstimate.value).toLocaleString('pt-br', { currency: 'EUR', style: 'currency' })}
            </NumberItem>
        </WrapStyled>
    )
}

const WrapStyled = styled.div`
    background: #EAEAEA;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
`

const NumberItem = styled.p`
    margin: 0; 
    /* Todo parágrafo vem com 1rem de margem */
    text-align: center;
    span {
        display: block;
        font-size: 0.875rem;
    }

`