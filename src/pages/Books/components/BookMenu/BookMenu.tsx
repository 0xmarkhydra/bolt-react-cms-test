import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import BookMenuHeader from './BookMenuHeader';
import BookMenuTable from './BookMenuTable';
import DeleteMenuBookModal from './DeleteMenuBookModal';
import AddChapterDrawer from './AddChapterDrawer';
import { useMenuBooks } from './useMenuBooks';
import { deleteMenuBook } from '../../../../api/menu-book';
import { useChapterSubmit } from './AddChapterDrawer/useChapterSubmit';
import type { MenuBook } from '../../../../api/menu-book/types';
import type { AddChapterFormValues } from './AddChapterDrawer/types';

const BookMenu: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { menuBooks, loading, totalItems, refetch } = useMenuBooks(id || '');
  const [selectedMenuBook, setSelectedMenuBook] = useState<MenuBook | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddChapterDrawerOpen, setIsAddChapterDrawerOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const { isSubmitting, handleSubmit } = useChapterSubmit(id || '');

  const handleDeleteMenuBook = (menuBook: MenuBook) => {
    setSelectedMenuBook(menuBook);
    setIsDeleteModalOpen(true);
    setDeleteError(null);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedMenuBook) return;

    try {
      setIsDeleting(true);
      setDeleteError(null);
      
      await deleteMenuBook(selectedMenuBook.id);
      message.success('Xóa mục thành công');
      setIsDeleteModalOpen(false);
      setSelectedMenuBook(null);
      refetch();
    } catch (error: any) {
      setDeleteError(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleAddChapter = async (values: AddChapterFormValues) => {
    const success = await handleSubmit(values);
    if (success) {
      setIsAddChapterDrawerOpen(false);
      refetch();
    }
  };

  return (
    <div className="space-y-6">
      <BookMenuHeader 
        totalItems={totalItems}
        onRefresh={refetch}
        onAddChapter={() => setIsAddChapterDrawerOpen(true)}
      />
      
      <div className="bg-white rounded-lg shadow-sm">
        <BookMenuTable 
          data={menuBooks}
          loading={loading}
          onDelete={handleDeleteMenuBook}
        />
      </div>

      <DeleteMenuBookModal
        menuBook={selectedMenuBook}
        open={isDeleteModalOpen}
        onCancel={() => {
          setIsDeleteModalOpen(false);
          setSelectedMenuBook(null);
          setDeleteError(null);
        }}
        onConfirm={handleDeleteConfirm}
        loading={isDeleting}
        error={deleteError}
      />

      <AddChapterDrawer
        open={isAddChapterDrawerOpen}
        onClose={() => setIsAddChapterDrawerOpen(false)}
        onSubmit={handleAddChapter}
        loading={isSubmitting}
      />
    </div>
  );
};

export default BookMenu;