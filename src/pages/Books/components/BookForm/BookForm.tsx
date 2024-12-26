import React from 'react';
import { Form } from 'antd';
import type { BookFormValues } from './types';
import { BookCover } from './BookCover';
import { BookDetails } from './BookDetails';

interface BookFormProps {
  onSubmit: (values: BookFormValues) => void;
  initialValues?: Partial<BookFormValues>;
}

const BookForm: React.FC<BookFormProps> = ({
  onSubmit,
  initialValues
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

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
        <BookDetails />
      </div>
    </Form>
  );
};

export default BookForm;