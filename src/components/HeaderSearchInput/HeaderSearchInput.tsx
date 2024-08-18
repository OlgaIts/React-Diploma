import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSearchInput } from '@components/Search';

export const HeaderSearchInput = memo(() => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleValueChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const onIconClick = () => {
    if (value) {
      navigate(`/catalog/?search=${value}`);
    }
  };
  return (
    <IconSearchInput callback={handleValueChange} onIconClick={onIconClick} />
  );
});
HeaderSearchInput.displayName = 'HeaderSearchInput';
