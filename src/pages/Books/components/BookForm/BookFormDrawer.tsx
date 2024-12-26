import React from 'react';
import { Drawer, Button } from 'antd';
import type { BookFormDrawerProps } from './types';
import BookForm from './BookForm';

const BookFormDrawer: React.FC<BookFormDrawerProps> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
  title = 'Thêm sách mới'
}) => {
  return (
    <Drawer
      title={title}
      open={open}
      onClose={onClose}
      width={720}
      styles={{
        body: {
          paddingBottom: 80,
        }
      }}
      extra={
        <Button 
          type="primary" 
          onClick={() => {}}
          className="bg-[#45b630]"
        >
          Lưu
        </Button>
      }
    >
      <BookForm
        onSubmit={(values) => {
          onSubmit(values);
          onClose();
        }}
        initialValues={initialValues}
      />
    </Drawer>
  );
};

export default BookFormDrawer;