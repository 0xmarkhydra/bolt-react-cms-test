import React, { useState } from 'react';
import { Form, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

export const BookCover: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Chỉ có thể tải lên file ảnh!');
      return false;
    }
    return true;
  };

  const handleChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  return (
    <div className="w-1/3">
      <Form.Item
        name="cover"
        label="Ảnh bìa sách"
        valuePropName="fileList"
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          maxCount={1}
          className="w-full [&_.ant-upload]:!w-full [&_.ant-upload]:!h-[400px] [&_.ant-upload.ant-upload-select]:!w-full [&_.ant-upload.ant-upload-select]:!h-full"
        >
          {fileList.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <PlusOutlined className="text-2xl mb-2" />
              <div className="text-sm">Tải ảnh lên</div>
            </div>
          )}
        </Upload>
      </Form.Item>
    </div>
  );
};