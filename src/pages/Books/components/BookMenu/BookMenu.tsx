import React from 'react';
import { useParams } from 'react-router-dom';
import BookMenuHeader from './BookMenuHeader';
import BookMenuTable from './BookMenuTable';
import { useMenuBooks } from './useMenuBooks';

const BookMenu: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { menuBooks, loading, totalItems, refetch } = useMenuBooks(id || '');

  return (
    <div className="space-y-6">
      <BookMenuHeader 
        totalItems={totalItems}
        onRefresh={refetch}
      />
      
      <div className="bg-white rounded-lg shadow-sm">
        <BookMenuTable 
          data={menuBooks}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default BookMenu;