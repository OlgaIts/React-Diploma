import {FocusEvent, memo, useState} from "react";
import classNames from "classnames";
import {InputSearchProps, SearchInput} from "../SearchInput/SearchInput";
import styles from "./IconSearchInput.module.scss";

interface IconSearchInputProps extends InputSearchProps {
  iconSearchClassName?: string;
  onIconClick?: () => void;
}

export const IconSearchInput = memo(
  ({
    iconSearchClassName,
    onIconClick,
    ...inputSearchProps
  }: IconSearchInputProps) => {
    const [open, setOpen] = useState(false);

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
      const {value} = e.target;
      console.log(e.target.value);
      // TODO: сделать хук useClickOutside
      if (value === "") {
        setOpen(false);
      }
    };
    return (
      <>
        {open ? (
          <div className={classNames(styles.component, iconSearchClassName)}>
            <div
              className={classNames(styles.icon, styles.icon_input)}
              onClick={onIconClick}
            ></div>
            <SearchInput {...inputSearchProps} onBlur={onBlur} />
          </div>
        ) : (
          <div className={styles.icon} onClick={() => setOpen(!open)}></div>
        )}
      </>
    );
  },
);
IconSearchInput.displayName = "IconSearchInput";
