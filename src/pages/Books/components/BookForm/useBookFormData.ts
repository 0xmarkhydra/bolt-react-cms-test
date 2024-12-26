import { useMemo } from 'react';
import { Subjects } from '../../types';

export const useBookFormData = () => {
  const categories = [
    { label: 'Sách giáo khoa', value: 'textbook' },
    { label: 'Sách tham khảo', value: 'reference' },
    { label: 'Sách bài tập', value: 'workbook' },
  ];

  const authors = [
    { label: 'Nguyễn Văn A', value: 'author1' },
    { label: 'Trần Thị B', value: 'author2' },
    { label: 'Lê Văn C', value: 'author3' },
  ];

  const subjectOptions = useMemo(() => 
    Object.entries(Subjects).map(([key, value]) => ({
      label: value,
      value: key,
    })), 
    []
  );

  return {
    categories,
    authors,
    subjectOptions,
  };
};