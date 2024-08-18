import { ChangeEvent, useState } from 'react';
import { useErrorCatcher } from './useErrorCatcher';
import { useAppDispatch } from './reduxHooks';
import { services } from '@api/services/service';
import {
  CartItem,
  clearCart,
  setOrderStatus,
} from '@app/redux/slices/cartSlice';

const inputKeys = ['phone', 'address'];
const checkboxKeys = ['confirm'];

export const useOrderForm = () => {
  const [form, setForm] = useState({ phone: '', address: '', confirm: false });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { errorCatcher } = useErrorCatcher();

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = e.target;

    if (inputKeys.includes(id)) {
      setForm((state) => ({
        ...state,
        [id]: value,
      }));
    }
    if (checkboxKeys.includes(id)) {
      setForm((state) => ({
        ...state,
        [id]: checked,
      }));
    }
  };

  const postOrder = async (products: CartItem[]) => {
    try {
      setIsLoading(true);
      const items = products.map((item) => ({
        id: item.product.id,
        price: item.product.price,
        count: item.count,
      }));

      const response = await services.postOrder(
        form.phone,
        form.address,
        items,
      );
      if (response.status === 204) {
        dispatch(clearCart());
        dispatch(setOrderStatus('success'));
      }
      setIsLoading(false);
    } catch (error) {
      dispatch(setOrderStatus('error'));
      errorCatcher(error);
    }
  };

  return {
    form,
    onFormChange,
    postOrder,
    isLoading,
  };
};
