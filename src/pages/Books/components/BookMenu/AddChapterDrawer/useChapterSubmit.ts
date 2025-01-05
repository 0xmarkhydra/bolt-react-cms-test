import { useState } from 'react';
import { message } from 'antd';
import { uploadFile } from '../../../../../api/upload';
import { createMenuBook } from '../../../../../api/menu-book';
import type { AddChapterFormValues } from './types';

export const useChapterSubmit = (bookId: string) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: AddChapterFormValues) => {
    try {
      setIsSubmitting(true);

      // Handle cover image upload
      let coverUrl = '';
      if (values.cover?.[0]?.originFileObj) {
        coverUrl = await uploadFile(values.cover[0].originFileObj);
      }

      // Handle video upload/embed
      let videoUrl = '';
      if (values.videos?.[0]) {
        if (values.videos[0].type === 'upload') {
          videoUrl = values.videos[0].content;
        } else {
          videoUrl = values.videos[0].content;
        }
      }

      // Handle file attachments
      const attachedFiles = await Promise.all(
        (values.files || []).map(async (file) => {
          if (file.originFileObj) {
            const url = await uploadFile(file.originFileObj);
            return {
              url,
              name: file.name,
              size: file.size,
              uid: file.uid,
              type: file.type,
            };
          }
          return file;
        })
      );

      const payload = {
        type: 'CHUONG',
        book_id: bookId,
        title: values.title,
        description: values.content || '',
        cover: coverUrl,
        active: values.active,
        video: videoUrl,
        attached: attachedFiles,
        active_code_id: true,
      };

      await createMenuBook(payload);
      message.success('Thêm chương mới thành công');
      return true;
    } catch (error: any) {
      console.error('Error submitting chapter:', error);
      message.error(error.message || 'Có lỗi xảy ra khi thêm chương');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit,
  };
};