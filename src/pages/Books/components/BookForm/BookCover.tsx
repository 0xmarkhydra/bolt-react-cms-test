import React from 'react';
import { Form, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const BookCover: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const beforeUpload: UploadProps['beforeUpload'] = (file) => {
    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      message.error('Chỉ chấp nhận file ảnh định dạng JPG, PNG, GIF hoặc WebP!');
      return Upload.LIST_IGNORE;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      message.error('Kích thước file không được vượt quá 5MB!');
      return Upload.LIST_IGNORE;
    }

    return false;
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList?.slice(-1);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <div className="w-[280px]">
      <Form.Item
        name="cover"
        label={<span className="text-base">Ảnh bìa sách</span>}
        valuePropName="fileList"
        getValueFromEvent={normFile}
        className="mb-0"
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          maxCount={1}
          accept={ALLOWED_FILE_TYPES.join(',')}
          className="book-cover-upload"
        >
          {fileList.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <PlusOutlined className="text-3xl mb-4" />
              <div className="text-base">Tải ảnh lên</div>
              <div className="text-sm text-gray-500 mt-2">
                (JPG, PNG, GIF, WebP)
              </div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <style>{`
        .book-cover-upload .ant-upload-wrapper,
        .book-cover-upload .ant-upload,
        .book-cover-upload .ant-upload-list,
        .book-cover-upload .ant-upload-list-item-container,
        .book-cover-upload .ant-upload-list-item {
          width: 280px !important;
          height: 373px !important;
        }

        .book-cover-upload .ant-upload-list-item-image {
          object-fit: contain !important;
          width: 100% !important;
          height: 100% !important;
          padding: 8px;
        }

        .book-cover-upload .ant-upload-list-item-thumbnail img {
          object-fit: contain !important;
          width: 100% !important;
          height: 100% !important;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};