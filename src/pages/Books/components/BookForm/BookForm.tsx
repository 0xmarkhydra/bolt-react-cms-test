import React, { forwardRef, useImperativeHandle } from 'react';
import { Form } from 'antd';
import type { BookFormValues } from './types';
import type { Book } from '../../../../api/books/types';
import { BookCover } from './BookCover';
import { BookDetails } from './BookDetails';
import { useBookSubmit } from './useBookSubmit';

interface BookFormProps {
  onSubmit: (values: BookFormValues) => void;
  initialValues?: Book | null;
}

const BookForm = forwardRef<{ resetFields: () => void }, BookFormProps>(({
  onSubmit,
  initialValues
}, ref) => {
  const [form] = Form.useForm();
  const { isSubmitting, handleSubmit } = useBookSubmit(onSubmit, initialValues);

  // Transform initialValues for the form
  const transformedValues = initialValues ? {
    title: initialValues.name,
    summary: initialValues.description,
    publisher: initialValues.publishing_house,
    subjects: initialValues.subject,
    expiration_date: initialValues.expiration_date,
    is_public: initialValues.is_public,
    categories: initialValues.book_tags.map(tag => tag.tag.id),
    authors: initialValues.authors.map(author => author.user.id),
  } : undefined;

  // Expose form methods to parent component
  useImperativeHandle(ref, () => ({
    resetFields: () => form.resetFields()
  }));

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={transformedValues}
      onFinish={handleSubmit}
      className="py-6"
    >
      <div className="flex gap-12">
        <BookCover initialImage={initialValues?.avatar} />
        <BookDetails isSubmitting={isSubmitting} />
      </div>
    </Form>
  );
});

BookForm.displayName = 'BookForm';

export default BookForm;