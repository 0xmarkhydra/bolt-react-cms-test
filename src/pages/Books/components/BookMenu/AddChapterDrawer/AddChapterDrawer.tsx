import React from 'react';
import { Drawer, Form, Input, Switch, Button } from 'antd';
import RichTextEditor from '../../../../../components/RichTextEditor';
import CoverUpload from './CoverUpload';
import VideoUpload from './VideoUpload';
import FileUpload from './FileUpload';
import type { AddChapterFormValues } from './types';

interface AddChapterDrawerProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: AddChapterFormValues) => void;
  loading?: boolean;
}

const AddChapterDrawer: React.FC<AddChapterDrawerProps> = ({
  open,
  onClose,
  onSubmit,
  loading
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Drawer
      title="Thêm mới thông tin"
      open={open}
      onClose={onClose}
      width={800}
      extra={
        <Button
          type="primary"
          onClick={handleSubmit}
          loading={loading}
          className="bg-[#45b630]"
        >
          Lưu
        </Button>
      }
    >
      <Form
        form={form}
        layout="vertical"
        className="mt-4"
        initialValues={{
          active: false,
        }}
      >
        <div className="flex gap-8">
          {/* Left side - Cover Upload */}
          <Form.Item
            name="cover"
            label={<span className="text-base">Ảnh bìa</span>}
            className="flex-shrink-0 mb-0"
          >
            <CoverUpload />
          </Form.Item>

          {/* Right side - Other Fields */}
          <div className="flex-1">
            <Form.Item
              name="title"
              label={<span className="text-base">Tiêu đề <span className="text-red-500">*</span></span>}
              rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
            >
              <Input placeholder="Nhập tiêu đề" />
            </Form.Item>

            <Form.Item
              name="active"
              valuePropName="checked"
            >
              <Switch checkedChildren="Kích hoạt" unCheckedChildren="Chưa kích hoạt" />
            </Form.Item>
          </div>
        </div>

        {/* Rich Text Content */}
        <Form.Item
          name="content"
          label={<span className="text-base">Nội dung</span>}
        >
          <RichTextEditor
            placeholder="Nhập nội dung..."
            className="min-h-[300px]"
          />
        </Form.Item>

        {/* Video Upload Section */}
        <Form.Item name="videos">
          <VideoUpload />
        </Form.Item>

        {/* File Upload Section */}
        <Form.Item name="files">
          <FileUpload />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default AddChapterDrawer;