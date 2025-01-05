import React from 'react';
import { Form, Button, List } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

interface FileUploadProps {
  value?: UploadFile[];
  onChange?: (fileList: UploadFile[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ value = [], onChange }) => {
  const handleUploadFile = () => {
    // Handle file upload logic
    console.log('Upload file clicked');
  };

  return (
    <Form.Item label="Đính kèm">
      <div className="space-y-4">
        <Button 
          icon={<PaperClipOutlined />} 
          onClick={handleUploadFile}
        >
          Upload file
        </Button>

        {value.length > 0 && (
          <List
            size="small"
            bordered
            dataSource={value}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button type="link" key="delete" danger>
                    Xóa
                  </Button>
                ]}
              >
                {item.name}
              </List.Item>
            )}
          />
        )}
      </div>
    </Form.Item>
  );
};

export default FileUpload;