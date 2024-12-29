import { api } from '../../utils/api';
import type { CreateBookPayload, BooksResponse, GetBooksParams } from './types';

export const getBooks = async (params: GetBooksParams = {}): Promise<BooksResponse> => {
  const queryParams = new URLSearchParams({
    take: (params.take || 100).toString(),
    page: (params.page || 1).toString(),
    sort_field: params.sort_field || 'created_at',
    sort_type: params.sort_type || 'DESC',
  });

  // Only add search param if it exists and is not empty
  if (params.search?.trim()) {
    queryParams.append('search', params.search.trim());
  }

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

export const deleteBook = async (id: string): Promise<void> => {
  await api(`/books/${id}`, {
    method: 'DELETE',
  });
};