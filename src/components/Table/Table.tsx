import { ReactNode, memo } from 'react';
import classNames from 'classnames';
import styles from './Table.module.scss';

export type TableColumns<T> = {
  [K in keyof T]: {
    header?: string;
  };
};

interface Footer {
  title: string;
  titleSpan: number;
  value: string;
}

export type TableFooter<T> = {
  [K in keyof T]: {
    header?: string;
  };
};

interface TableProps<T> {
  className?: string;
  children?: ReactNode;
  columns: TableColumns<Partial<T>>;
  data: T;
  footer?: Footer;
}

export const Table = memo(
  <T extends Record<string, any>>({
    className,
    columns,
    data,
    footer,
  }: TableProps<T>) => {
    return (
      <table className={classNames(styles.component, className)}>
        <thead>
          <tr className={styles.row}>
            {Object.keys(columns).map((key) => (
              <th className={styles.col} key={key}>
                {columns[key]?.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: T, key: number) => (
            <tr key={key} className={styles.row}>
              {Object.keys(columns).map((header) => (
                <td className={styles.col} key={header}>
                  {item?.[header]
                    ? typeof item[header] === 'function'
                      ? item[header]()
                      : item[header]
                    : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr className={styles.row}>
              <th
                className={styles.footer}
                style={{ gridColumn: `span ${footer?.titleSpan}` }}
              >
                {footer?.title}
              </th>
              <td className={styles.col}>{footer?.value} </td>
            </tr>
          </tfoot>
        )}
      </table>
    );
  },
);

Table.displayName = 'Table';
