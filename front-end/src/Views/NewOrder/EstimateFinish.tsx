import { PaypalButton } from "../../Components/PaypalButton";
import { clearCurrentEstimate, selectCurrentEstimate } from "../../store/slices/EstimateSlice";
import { useDispatch, useSelector } from "react-redux";
import { OrderResponseBody } from '@paypal/paypal-js';
import { toast } from "react-toastify";
import { createOrder } from "../../services/createOrder";
import { selectUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export function EstimateFinish() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!currentEstimate || !user) {
        return null
    }
    const handlePaypalSuccess = async (details: OrderResponseBody) => {
        try {
            await createOrder({
                estimate: currentEstimate,
                gatewayId: details.id,
                userId: user.id
            })
            dispatch(clearCurrentEstimate())
            navigate('/novo-pedido/sucesso')
        } catch {
            toast.error('Falha ao processar o Pagamento. Entre em contacto connosco.')
        }
    }
    const handlePaypalError = () => {
        toast.error('Ocorreu um erro ao realizar o Pagamento. Entre em contacto connosco.')
    }
    return (
        <div className="mt-3">
            <PaypalButton
                value={currentEstimate.value}
                customId={currentEstimate.id}
                onSuccess={handlePaypalSuccess}
                onError={handlePaypalError}
            />
        </div>
    )
}