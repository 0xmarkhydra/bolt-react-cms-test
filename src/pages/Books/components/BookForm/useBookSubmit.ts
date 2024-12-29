import { useState } from 'react';
import { message } from 'antd';
import { uploadFile, createBook } from '../../../../api';
import type { BookFormValues } from './types';

export const useBookSubmit = (onSuccess: (values: BookFormValues) => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: BookFormValues) => {
    try {
      setIsSubmitting(true);

      // Upload cover image if provided
      let avatarUrl = '';
      if (values.cover?.[0]?.originFileObj) {
        avatarUrl = await uploadFile(values.cover[0].originFileObj);
      }

      // Join multiple selections with commas
      const authorIds = Array.isArray(values.authors) ? values.authors.join(',') : values.authors;
      const categoryIds = Array.isArray(values.categories) ? values.categories.join(',') : values.categories;

      // Create book with uploaded image URL
      const bookData = {
        avatar: avatarUrl,
        name: values.title,
        description: values.summary || '',
        publishing_house: values.publisher || '',
        subject: values.subjects || '',
        authors: authorIds || '',
        tags: categoryIds || '',
      };

      await createBook(bookData);
      message.success('Sách đã được tạo thành công');
      onSuccess(values);
    } catch (error) {
      console.error('Error creating book:', error);
      message.error('Có lỗi xảy ra khi tạo sách');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit,
  };
};