import React, { useState } from 'react';
import { message } from 'antd';
import BookListHeader from './components/BookListHeader';
import BookSearch from './components/BookSearch';
import BookTable from './components/BookTable';
import BookFormDrawer from './components/BookForm';
import DeleteBookModal from './components/DeleteBookModal';
import { useBooks } from './hooks/useBooks';
import { deleteBook, createBook } from '../../api/books';
import type { Book } from '../../api/books/types';
import type { BookFormValues } from './components/BookForm/types';

const BookList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { books, loading, totalBooks, refetch } = useBooks();

  const handleRefresh = () => {
    refetch();
  };

  const handleAddNew = () => {
    setEditingBook(null);
    setIsDrawerOpen(true);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setIsDrawerOpen(true);
  };

  const handleDeleteBook = (book: Book) => {
    setSelectedBook(book);
    setIsDeleteModalOpen(true);
    setDeleteError(null);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedBook) return;

    try {
      setIsDeleting(true);
      setDeleteError(null);
      
      await deleteBook(selectedBook.id);
      message.success('Xóa sách thành công');
      setIsDeleteModalOpen(false);
      setSelectedBook(null);
      refetch();
    } catch (error: any) {
      setDeleteError(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSubmit = async (values: BookFormValues) => {
    try {
      await createBook(values);
      message.success('Tạo sách thành công');
      setIsDrawerOpen(false);
      refetch();
    } catch (error: any) {
      message.error(error.message || 'Có lỗi xảy ra khi tạo sách');
    }
  };

  return (
    <div className="space-y-4">
      <BookListHeader 
        totalBooks={totalBooks}
        onRefresh={handleRefresh}
        onAddNew={handleAddNew}
      />

      <div className="bg-white rounded-lg shadow">
        <BookSearch 
          value={searchText}
          onChange={setSearchText}
        />
        <BookTable 
          data={books}
          loading={loading}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        />
      </div>

      <BookFormDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSubmit={handleSubmit}
        initialValues={editingBook}
        title={editingBook ? 'Sửa thông tin sách' : 'Thêm sách mới'}
      />

      <DeleteBookModal
        book={selectedBook}
        open={isDeleteModalOpen}
        onCancel={() => {
          setIsDeleteModalOpen(false);
          setSelectedBook(null);
          setDeleteError(null);
        }}
        onConfirm={handleDeleteConfirm}
        loading={isDeleting}
        error={deleteError}
      />
    </div>
  );
};

export default BookList;