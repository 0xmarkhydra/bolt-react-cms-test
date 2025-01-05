import React from 'react';
import { Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

interface CoverUploadProps {
  value?: UploadFile[];
  onChange?: (fileList: UploadFile[]) => void;
}

const CoverUpload: React.FC<CoverUploadProps> = ({ value, onChange }) => {
  return (
    <Form.Item label="Ảnh bìa">
      <Upload
        listType="picture-card"
        maxCount={1}
        fileList={value}
        onChange={({ fileList }) => onChange?.(fileList)}
        accept="image/png,image/jpeg,image/jpg"
        beforeUpload={() => false}
        className="cover-upload"
      >
        {(!value || value.length === 0) && (
          <div className="upload-placeholder">
            <PlusOutlined className="text-2xl mb-2" />
            <div className="font-medium">Tải ảnh lên</div>
            <div className="text-xs text-gray-500 mt-1">
              Chỉ hỗ trợ ảnh PNG, JPG, JPEG
            </div>
          </div>
        )}
      </Upload>

      <style jsx>{`
        .cover-upload .ant-upload-wrapper,
        .cover-upload .ant-upload,
        .cover-upload .ant-upload-list,
        .cover-upload .ant-upload-list-item-container {
          width: 400px !important;
          height: 225px !important; /* 16:9 aspect ratio */
          margin: 0;
        }

        .cover-upload .ant-upload-select {
          border: 2px dashed #d9d9d9;
          border-radius: 8px;
          background: #fafafa;
          transition: all 0.3s;
        }

        .cover-upload .ant-upload-select:hover {
          border-color: #45b630;
          background: #f6ffed;
        }

        .cover-upload .upload-placeholder {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #666;
        }

        .cover-upload .ant-upload-list-item {
          padding: 8px;
        }

        .cover-upload .ant-upload-list-item-image {
          object-fit: contain !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 4px;
        }

        .cover-upload .ant-upload-list-item-thumbnail img {
          object-fit: contain !important;
          padding: 8px;
          border-radius: 4px;
        }

        .cover-upload .ant-upload-list-item-actions {
          top: 8px !important;
          right: 8px !important;
        }
      `}</style>
    </Form.Item>
  );
};

export default CoverUpload;