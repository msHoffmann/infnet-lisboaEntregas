import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { OrderResponseBody } from '@paypal/paypal-js';

type Props = {
    value: number
    customId: string
    onSuccess: (details: OrderResponseBody) => Promise<void>
    onError: () => void
}

export function PaypalButton({ value, customId, onSuccess, onError }: Props) {
    return (
        <PaypalButtonsStyled
            createOrder={(data, actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: 'EUR',
                            value: value.toString()
                        },
                        custom_id: customId
                    }],
                    application_context: {
                        brand_name: 'Lisboa Entregas',
                        shipping_preference: 'NO_SHIPPING'
                    }
                })
            }}
            onApprove={async (data, actions) => {
                if (actions.order) {
                    const details = await actions.order.capture()
                    onSuccess(details)
                }
            }}
            onError={onError}
            style={{
                layout: 'horizontal',
                color: 'blue',
                shape: 'pill',
                tagline: false,
                height: 38
            }}
        />
    )
}

const PaypalButtonsStyled = styled(PayPalButtons)`
    .paypal-buttons {
        display: block !important;
    }
`