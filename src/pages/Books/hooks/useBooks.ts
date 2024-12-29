import { useState, useEffect } from 'react';
import { message } from 'antd';
import { getBooks } from '../../../api/books/bookService';
import type { Book } from '../../../api/books/types';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalBooks, setTotalBooks] = useState(0);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await getBooks();
      setBooks(response.data.data);
      setTotalBooks(response.data.pagination.total);
    } catch (error) {
      console.error('Error fetching books:', error);
      message.error('Không thể tải danh sách sách');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    loading,
    totalBooks,
    refetch: fetchBooks
  };
};