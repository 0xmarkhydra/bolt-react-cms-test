import React from 'react';
import { Modal } from 'antd';
import type { Book } from '../../../api/books/types';

interface DeleteBookModalProps {
  book: Book | null;
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

const DeleteBookModal: React.FC<DeleteBookModalProps> = ({
  book,
  open,
  onCancel,
  onConfirm,
  loading
}) => {
  if (!book) return null;

  return (
    <Modal
      title="Xác nhận xóa sách"
      open={open}
      onCancel={onCancel}
      onOk={onConfirm}
      okText="Xóa"
      cancelText="Hủy"
      confirmLoading={loading}
      okButtonProps={{ 
        danger: true,
      }}
    >
      <p>
        Bạn có chắc chắn muốn xóa sách "{book.name}" không? 
        Hành động này không thể hoàn tác.
      </p>
    </Modal>
  );
};

export default DeleteBookModal;