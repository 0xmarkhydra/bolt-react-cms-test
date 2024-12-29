import { api } from '../../utils/api';
import type { CreateBookPayload, BookResponse } from './types';

export const createBook = async (payload: CreateBookPayload): Promise<BookResponse> => {
  const result = await api('/books', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  
  return result.data;
};