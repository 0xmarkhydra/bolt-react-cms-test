import React, { useState } from 'react';
import BookListHeader from './components/BookListHeader';
import BookSearch from './components/BookSearch';
import BookTable from './components/BookTable';
import BookFormDrawer from './components/BookForm';
import { mockBooks } from './data/mockData';
import type { BookFormValues } from './components/BookForm/types';

const BookList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<any>(null);

  const handleRefresh = () => {
    // Implement refresh logic
  };

  const handleAddNew = () => {
    setEditingBook(null);
    setIsDrawerOpen(true);
  };

  const handleEditBook = (book: any) => {
    setEditingBook(book);
    setIsDrawerOpen(true);
  };

  const handleDrawerSubmit = (values: BookFormValues) => {
    console.log('Form submitted:', values);
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-4">
      <BookListHeader 
        totalBooks={mockBooks.length}
        onRefresh={handleRefresh}
        onAddNew={handleAddNew}
      />

      <div className="bg-white rounded-lg shadow">
        <BookSearch 
          value={searchText}
          onChange={setSearchText}
        />
        <BookTable 
          data={mockBooks}
          onEdit={handleEditBook}
        />
      </div>

      <BookFormDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSubmit={handleDrawerSubmit}
        initialValues={editingBook}
        title={editingBook ? 'Sửa thông tin sách' : 'Thêm sách mới'}
      />
    </div>
  );
};

export default BookList;