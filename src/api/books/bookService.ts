import { api } from '../../utils/api';
import type { CreateBookPayload, BooksResponse, GetBooksParams } from './types';

export const getBooks = async (params: GetBooksParams = {}): Promise<BooksResponse> => {
  const queryParams = new URLSearchParams({
    take: (params.take || 100).toString(),
    page: (params.page || 1).toString(),
    sort_field: params.sort_field || 'created_at',
    sort_type: params.sort_type || 'DESC'
  });

  const result = await api(`/books?${queryParams}`);
  return result;
};

export const createBook = async (payload: CreateBookPayload): Promise<any> => {
  const result = await api('/books', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  
  return result.data;
};

export const deleteBook = async (id: string): Promise<boolean> => {
  const result = await api(`/books/${id}`, {
    method: 'DELETE',
  });
  return result.data;
};