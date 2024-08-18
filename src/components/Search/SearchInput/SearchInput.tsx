import { memo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import useDebounce from '@hooks/useDebounce';
import styles from './SearchInput.module.scss';

export interface InputSearchProps {
  className?: string;
  callback: (value: string) => void;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
}

export const SearchInput = memo(
  ({ callback, className, onBlur }: InputSearchProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(
      searchParams.get('search') || '',
    );
    const debounceCallback = useDebounce(callback, 1500);

    const handleValueChange = ({
      target,
    }: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = target;
      setSearchValue(value);
      searchParams.delete('offset');
      !value
        ? searchParams.delete('search')
        : searchParams.set('search', value);

      setSearchParams(searchParams);
      debounceCallback(value);
    };

    return (
      <form className={classNames(styles.form, className)}>
        <input
          className={styles.input}
          placeholder='Поиск'
          onChange={handleValueChange}
          value={searchValue}
          onBlur={onBlur}
        />
      </form>
    );
  },
);
SearchInput.displayName = 'SearchInput';
