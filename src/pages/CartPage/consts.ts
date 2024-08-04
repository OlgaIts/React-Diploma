import { TableColumns } from '../../components/Table/Table';
import { TableCartItem } from './types';

export const COLUMNS: TableColumns<TableCartItem> = {
  number: { header: '#' },
  title: { header: 'Название' },
  size: { header: 'Размер' },
  quantity: { header: 'Кол-во' },
  price: { header: 'Стоимость' },
  total: { header: 'Итого' },
  actions: { header: 'Действия' },
};
