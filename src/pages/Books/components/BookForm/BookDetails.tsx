import React from 'react';
import { Form, Input, Select } from 'antd';
import { useBookFormData } from './useBookFormData';

const { TextArea } = Input;

export const BookDetails: React.FC = () => {
  const { categories, authors, subjectOptions } = useBookFormData();

  return (
    <div className="flex-1">
      <div className="space-y-6">
        {/* Required Fields */}
        <Form.Item
          name="title"
          label={<span className="text-base">Tên sách</span>}
          rules={[{ required: true, message: 'Vui lòng nhập tên sách!' }]}
        >
          <Input 
            placeholder="Nhập tên sách"
            size="large"
            className="py-2"
          />
        </Form.Item>

        <Form.Item
          name="subjects"
          label={<span className="text-base">Môn học</span>}
          rules={[{ required: true, message: 'Vui lòng chọn môn học!' }]}
        >
          <Select
            mode="multiple"
            placeholder="Chọn môn học"
            options={subjectOptions}
            className="w-full"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="authors"
          label={<span className="text-base">Tác giả</span>}
          rules={[{ required: true, message: 'Vui lòng chọn tác giả!' }]}
        >
          <Select
            mode="multiple"
            placeholder="Chọn tác giả"
            options={authors}
            className="w-full"
            size="large"
          />
        </Form.Item>

        {/* Optional Fields */}
        <Form.Item
          name="categories"
          label={<span className="text-base">Danh mục</span>}
        >
          <Select
            mode="multiple"
            placeholder="Chọn danh mục"
            options={categories}
            className="w-full"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="publisher"
          label={<span className="text-base">Nhà xuất bản</span>}
        >
          <Input 
            placeholder="Nhập tên nhà xuất bản"
            size="large"
            className="py-2"
          />
        </Form.Item>

        <Form.Item
          name="summary"
          label={<span className="text-base">Tóm tắt nội dung</span>}
        >
          <TextArea
            rows={4}
            placeholder="Nhập tóm tắt nội dung sách"
            size="large"
            className="py-2"
          />
        </Form.Item>
      </div>
    </div>
  );
};