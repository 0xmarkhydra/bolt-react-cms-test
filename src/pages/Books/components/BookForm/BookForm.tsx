import React, { forwardRef, useImperativeHandle } from 'react';
import { Form } from 'antd';
import type { BookFormValues } from './types';
import { BookCover } from './BookCover';
import { BookDetails } from './BookDetails';
import { useBookSubmit } from './useBookSubmit';

interface BookFormProps {
  onSubmit: (values: BookFormValues) => void;
  initialValues?: Partial<BookFormValues>;
}

const BookForm = forwardRef<{ resetFields: () => void }, BookFormProps>(({
  onSubmit,
  initialValues
}, ref) => {
  const [form] = Form.useForm();
  const { isSubmitting, handleSubmit } = useBookSubmit(onSubmit);

  // Expose form methods to parent component
  useImperativeHandle(ref, () => ({
    resetFields: () => form.resetFields()
  }));

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="py-6"
    >
      <div className="flex gap-12">
        <BookCover />
        <BookDetails isSubmitting={isSubmitting} />
      </div>
    </Form>
  );
});

BookForm.displayName = 'BookForm';

export default BookForm;