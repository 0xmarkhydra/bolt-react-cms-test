import React from 'react';
import { Space, Button, Input } from 'antd';
import { ReloadOutlined, PlusOutlined, ImportOutlined } from '@ant-design/icons';

const { Search } = Input;

const BookMenuHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Search 
        placeholder="Tìm kiếm" 
        style={{ width: 300 }}
        allowClear
      />
      <Space>
        <Button icon={<ReloadOutlined />}>
          Làm mới
        </Button>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          className="bg-[#45b630]"
        >
          Thêm danh mục
        </Button>
        <Button icon={<ImportOutlined />}>
          Import
        </Button>
      </Space>
    </div>
  );
};

export default BookMenuHeader;