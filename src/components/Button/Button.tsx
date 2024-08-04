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
  disabled?: boolean;
}
export const Button = ({
  children,
  className,
  to,
  onClick,
  tag = 'button',
  toCart,
  withBorder,
  disabled,
}: ButtonProps) => {
  const allStyles = classNames(
    styles.component,
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
        <button className={allStyles} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};
