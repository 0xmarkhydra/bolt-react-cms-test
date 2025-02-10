import { api } from '../../utils/api';
import type { CreateBookPayload, UpdateBookPayload, Book, PublishResponse, PublishHistoryResponse } from './types';

export const getBooks = async (params: GetBooksParams): Promise<BooksResponse> => {
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) queryParams.append(key, value.toString());
  });
  
  return await api(`/books?${queryParams.toString()}`);
};

export const createBook = async (payload: CreateBookPayload): Promise<Book> => {
  const result = await api('/books', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return result.data;
};

export const updateBook = async (id: string, payload: UpdateBookPayload): Promise<void> => {
  await api(`/books/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
};

export const deleteBook = async (id: string): Promise<void> => {
  await api(`/books/${id}`, {
    method: 'DELETE',
  });
};

export const printBook = async (bookId: string, quantity: number): Promise<PublishResponse> => {
  return await api(`/books/${bookId}/publish`, {
    method: 'POST',
    body: JSON.stringify({
      quantity,
      version: 0
    }),
  });
};

export const getPublishHistory = async (bookId: string): Promise<PublishHistoryResponse> => {
  return await api(`/books/${bookId}/history-publish`);
};