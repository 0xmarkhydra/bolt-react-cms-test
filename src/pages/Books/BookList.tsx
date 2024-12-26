import React, { useState } from 'react';
import BookListHeader from './components/BookListHeader';
import BookSearch from './components/BookSearch';
import BookTable from './components/BookTable';
import { mockBooks } from './data/mockData';

const BookList: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleRefresh = () => {
    // Implement refresh logic
  };

  const handleAddNew = () => {
    // Implement add new book logic
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
        <BookTable data={mockBooks} />
      </div>
    </div>
  );
};

export default BookList;