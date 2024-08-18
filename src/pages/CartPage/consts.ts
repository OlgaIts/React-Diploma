import { TableColumns } from '@components/Table/Table';
import { TableCartItem } from './types';

export const COLUMNS: TableColumns<Omit<TableCartItem, 'id'>> = {
  number: { header: '#' },
  title: { header: 'Название' },
  size: { header: 'Размер' },
  count: { header: 'Кол-во' },
  price: { header: 'Стоимость' },
  total: { header: 'Итого' },
  actions: { header: 'Действия' },
};
