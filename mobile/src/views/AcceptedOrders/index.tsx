import React from 'react';
import {useSelector} from 'react-redux';
import {OrdersList} from '../../components/OrdersList';
import {selectAcceptedOrders} from '../../store/slices/ordersSlice';

export function AcceptedOrdersView() {
  const acceptedOrders = useSelector(selectAcceptedOrders);
  return (
    <OrdersList
      orders={acceptedOrders}
      noOrdersMessage="Nenhum Pedido em andamento encontrado."
    />
  );
}
