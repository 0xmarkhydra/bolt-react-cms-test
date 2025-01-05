import { api } from '../../utils/api';
import type { MenuBookResponse, GetMenuBookParams } from './types';

export const getMenuBooks = async (params: GetMenuBookParams): Promise<MenuBookResponse> => {
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) queryParams.append(key, value.toString());
  });
  
  return await api(`/menu-book?${queryParams.toString()}`);
};