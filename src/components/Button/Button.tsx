import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | ReactNode;
  className?: string;
  onClick?: () => void;
  tag: 'button' | 'Link';
  to?: string;
  toCart?: boolean;
  withBorder?: boolean;
  disabledCart?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
}
export const Button = ({
  children,
  className,
  to,
  onClick,
  tag = 'button',
  toCart,
  withBorder,
  disabledCart,
  disabled,
  type,
}: ButtonProps) => {
  const allStyles = classNames(
    styles.component,
    { [styles.disabledCart]: disabledCart },
    { [styles.disabled]: disabled },
    { [styles.cart]: toCart },
    { [styles.with_border]: withBorder },
    className,
  );

  return (
    <>
      {tag === 'Link' ? (
        <Link className={allStyles} to={to as string}>
          {children}
        </Link>
      ) : (
        <button className={allStyles} onClick={onClick} type={type}>
          {children}
        </button>
      )}
    </>
  );
};
