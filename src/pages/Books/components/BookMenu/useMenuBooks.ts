import { useState, useEffect } from 'react';
import { message } from 'antd';
import { getMenuBooks } from '../../../../api/menu-book';
import type { MenuBook } from '../../../../api/menu-book/types';

export const useMenuBooks = (bookId: string) => {
  const [menuBooks, setMenuBooks] = useState<MenuBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const fetchMenuBooks = async () => {
    try {
      setLoading(true);
      const response = await getMenuBooks({
        book_id: bookId,
        page: 1,
        take: 100,
        sort_type: 'ASC',
        sort_field: 'created_at'
      });
      setMenuBooks(response.data.data);
      setTotalItems(response.data.pagination.total);
    } catch (error) {
      console.error('Error fetching menu books:', error);
      message.error('Không thể tải danh sách menu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bookId) {
      fetchMenuBooks();
    }
  }, [bookId]);

  return {
    menuBooks,
    loading,
    totalItems,
    refetch: fetchMenuBooks
  };
};