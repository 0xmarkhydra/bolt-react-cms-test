import React from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import BookMenuHeader from './BookMenuHeader';
import BookMenuTable from './BookMenuTable';

const BookMenu: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Menu sách</h1>
      
      <Card>
        <BookMenuHeader />
        <BookMenuTable />
      </Card>
    </div>
  );
};

export default BookMenu;