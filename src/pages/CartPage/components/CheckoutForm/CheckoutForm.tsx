import { FormEvent, memo, useState } from 'react';
import { useOrderForm } from '@hooks/useOrderForm';
import { useAppSelector } from '@hooks/reduxHooks';
import { Button } from '@components/Button';
import { Preloader } from '@components/Preloader';
import styles from './CheckoutForm.module.scss';

export const CheckoutForm = memo(() => {
  const { form, onFormChange, postOrder, isLoading } = useOrderForm();
  const cartItems = useAppSelector(({ cart }) => cart.items);
  const [errors, setErrors] = useState<{ phone?: string; address?: string }>(
    {},
  );

  const validateForm = () => {
    const fields: (keyof typeof form)[] = ['phone', 'address'];
    const newErrors: Partial<Record<(typeof fields)[number], string>> = {};

    fields.forEach((field) => {
      if (!form[field].toString().trim()) {
        newErrors[field] = '*Поле обязательно для заполнения';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    postOrder(cartItems);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_group}>
        <label htmlFor='phone'>Телефон*</label>
        <input
          className={styles.input}
          id='phone'
          placeholder='Ваш телефон'
          value={form.phone}
          onChange={onFormChange}
          type='text'
        />
        {errors.phone && <div className={styles.error}>{errors.phone}</div>}
      </div>
      <div className={styles.form_group}>
        <label htmlFor='address'>Адрес доставки*</label>
        <input
          className={styles.input}
          id='address'
          placeholder='Адрес доставки'
          value={form.address}
          onChange={onFormChange}
          type='text'
        />
        {errors.address && <div className={styles.error}>{errors.address}</div>}
      </div>
      <div>
        <input
          type='checkbox'
          id='confirm'
          checked={form.confirm}
          onChange={onFormChange}
        />
        <label className={styles.check} htmlFor='confirm'>
          Согласен с правилами доставки
        </label>
      </div>
      {isLoading ? (
        <Preloader />
      ) : (
        <Button
          type='submit'
          disabled={!form.confirm}
          tag='button'
          withBorder
          className={styles.btn}
        >
          Оформить
        </Button>
      )}
    </form>
  );
});
CheckoutForm.displayName = 'CheckoutForm';
