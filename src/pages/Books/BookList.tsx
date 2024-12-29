import React, { useState } from 'react';
import BookListHeader from './components/BookListHeader';
import BookSearch from './components/BookSearch';
import BookTable from './components/BookTable';
import BookFormDrawer from './components/BookForm';
import BookPrintDrawer from './components/BookPrintDrawer';
import { useBooks } from './hooks/useBooks';
import type { Book } from '../../api/books/types';
import type { BookFormValues } from './components/BookForm/types';

const BookList: React.FC = () => {
  const { books, loading, totalBooks, refetch } = useBooks();
  const [searchText, setSearchText] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPrintDrawerOpen, setPrintDrawerOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = books.filter(book => 
    book.name.toLowerCase().includes(searchText.toLowerCase()) ||
    book.code_id.toString().includes(searchText)
  );

  const handleAddNew = () => {
    setSelectedBook(null);
    setIsDrawerOpen(true);
  };

  const handleEditBook = (book: Book) => {
    setSelectedBook(book);
    setIsDrawerOpen(true);
  };

  const handlePrintBook = (book: Book) => {
    setSelectedBook(book);
    setPrintDrawerOpen(true);
  };

  const handleDrawerSubmit = async (values: BookFormValues) => {
    console.log('Form submitted:', values);
    setIsDrawerOpen(false);
    await refetch();
  };

  const handlePrintConfirm = async (quantity: number) => {
    console.log('Printing', quantity, 'copies of', selectedBook?.name);
    setPrintDrawerOpen(false);
    setSelectedBook(null);
    await refetch();
  };

  return (
    <div className="space-y-4 min-w-0">
      <BookListHeader 
        totalBooks={totalBooks}
        onRefresh={refetch}
        onAddNew={handleAddNew}
      />

      <div className="bg-white rounded-lg shadow min-w-0">
        <div className="p-4 border-b">
          <BookSearch 
            value={searchText}
            onChange={setSearchText}
          />
        </div>
        <BookTable 
          data={filteredBooks}
          loading={loading}
          onEdit={handleEditBook}
          onPrint={handlePrintBook}
        />
      </div>

      <BookFormDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSubmit={handleDrawerSubmit}
        initialValues={selectedBook}
        title={selectedBook ? 'Sửa thông tin sách' : 'Thêm sách mới'}
      />

      {selectedBook && (
        <BookPrintDrawer
          open={isPrintDrawerOpen}
          onClose={() => {
            setPrintDrawerOpen(false);
            setSelectedBook(null);
          }}
          onConfirm={handlePrintConfirm}
          bookTitle={selectedBook.name}
          publishDate={selectedBook.updated_at}
          currentQuantity={selectedBook.quantity}
        />
      )}
    </div>
  );
};

export default BookList;