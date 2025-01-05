import React from 'react';
import { Form, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { uploadFile } from '../../../../../api/upload';
import type { UploadFile } from 'antd/es/upload/interface';

const CoverUpload: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [uploading, setUploading] = React.useState(false);

  const handleBeforeUpload = (file: File) => {
    // Check file type
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('Chỉ chấp nhận file ảnh!');
      return Upload.LIST_IGNORE;
    }

    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      message.error('Kích thước ảnh không được vượt quá 5MB!');
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  const handleChange = async ({ file, fileList: newFileList }: any) => {
    // Handle file removal
    if (newFileList.length === 0) {
      setFileList([]);
      return;
    }

    // Handle new file upload
    if (file.status === 'uploading' && !file.url) {
      setUploading(true);
      try {
        const url = await uploadFile(file.originFileObj);
        
        // Create new file object with URL
        const uploadedFile = {
          uid: file.uid,
          name: file.name,
          status: 'done',
          url: url,
        };

        // Update file list state
        setFileList([uploadedFile]);
      } catch (error) {
        message.error('Không thể tải lên ảnh bìa');
        setFileList([]);
      } finally {
        setUploading(false);
      }
    }
  };

  const uploadButton = (
    <div className="upload-placeholder">
      <PlusOutlined className="text-2xl mb-2" />
      <div className="font-medium">Tải ảnh lên</div>
      <div className="text-xs text-gray-500 mt-1">
        PNG, JPG, JPEG (Max: 5MB)
      </div>
    </div>
  );

  return (
    <Form.Item 
      name="cover"
      label="Ảnh bìa"
      getValueFromEvent={(e) => {
        // Return the URL directly from the fileList
        if (e?.fileList?.[0]?.url) {
          return e.fileList[0].url;
        }
        return '';
      }}
      initialValue=""
    >
      <Upload
        listType="picture-card"
        className="cover-upload"
        showUploadList={true}
        maxCount={1}
        fileList={fileList}
        beforeUpload={handleBeforeUpload}
        onChange={handleChange}
        customRequest={({ onSuccess }) => {
          setTimeout(() => {
            onSuccess?.('ok');
          }, 0);
        }}
        accept="image/png,image/jpeg,image/jpg"
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>

      <style>{`
        /* Container styles */
        .cover-upload {
          width: 400px !important;
        }

        .cover-upload .ant-upload-wrapper {
          width: 100% !important;
        }

        /* Upload button styles */
        .cover-upload .ant-upload.ant-upload-select {
          width: 400px !important;
          height: 225px !important; /* 16:9 aspect ratio */
          margin: 0;
          border: 2px dashed #d9d9d9;
          border-radius: 8px;
          background: #fafafa;
          transition: all 0.3s;
        }

        .cover-upload .ant-upload.ant-upload-select:hover {
          border-color: #45b630;
          background: #f6ffed;
        }

        /* Upload placeholder styles */
        .cover-upload .upload-placeholder {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #666;
        }

        /* Preview list styles */
        .cover-upload .ant-upload-list {
          width: 400px !important;
        }

        .cover-upload .ant-upload-list-item-container {
          width: 400px !important;
          height: 225px !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* Preview item styles */
        .cover-upload .ant-upload-list-item {
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 8px !important;
        }

        /* Preview image styles */
        .cover-upload .ant-upload-list-item-thumbnail {
          width: 100% !important;
          height: 100% !important;
          opacity: 1 !important;
        }

        .cover-upload .ant-upload-list-item-thumbnail img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          padding: 8px;
          border-radius: 4px;
        }

        /* Action buttons styles */
        .cover-upload .ant-upload-list-item-actions {
          position: absolute !important;
          top: 8px !important;
          right: 8px !important;
        }
      `}</style>
    </Form.Item>
  );
};

export default CoverUpload;