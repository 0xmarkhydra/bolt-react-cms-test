import React from 'react';
import { Table, Tag, Space, Button, Tooltip, Image, message } from 'antd';
import { CopyOutlined, EditOutlined, DeleteOutlined, FileTextOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuBook } from '../../../../api/menu-book/types';

// ... other code remains the same ...

const columns: ColumnsType<MenuBook> = [
  // ... other columns remain the same ...
  {
    title: 'ID',
    dataIndex: 'code_id',
    key: 'code_id',
    width: 150,
    render: (id) => (
      <Space>
        <span className="font-mono">{id || '-'}</span>
        {id && (
          <Button
            type="text"
            icon={<CopyOutlined className="text-gray-400 hover:text-gray-600" />}
            size="small"
            onClick={() => handleCopyId(id)}
          />
        )}
      </Space>
    ),
  },
  // ... other columns remain the same ...
];

// ... rest of the code remains the same ...