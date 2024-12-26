import React, { useState } from 'react';
import { Card, Table, Button, Tag, Space, Input } from 'antd';
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Category {
  key: string;
  name: string;
  totalBooks: number;
  status: 'active' | 'inactive';
}

const mockCategories: Category[] = [
  {
    key: '1',
    name: 'IT',
    totalBooks: 156,
    status: 'active',
  },
  {
    key: '2',
    name: 'Marketing',
    totalBooks: 89,
    status: 'active',
  },
  {
    key: '3',
    name: 'Business',
    totalBooks: 234,
    status: 'inactive',
  },
];

const BookCategories: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      title: 'Tên danh mục',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'Số lượng sách',
      dataIndex: 'totalBooks',
      key: 'totalBooks',
      align: 'right' as const,
      render: (total: number) => <Tag color="blue">{total}</Tag>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'success' : 'error'} className="rounded-full">
          {status === 'active' ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
        </Tag>
      ),
    },
    {
      title: '',
      key: 'actions',
      render: () => (
        <Space>
          <Button 
            type="text" 
            icon={<EditOutlined />}
            className="text-blue-500 hover:text-blue-600"
          />
          <Button 
            type="text" 
            icon={<DeleteOutlined />}
            className="text-red-500 hover:text-red-600"
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Danh mục sách</h1>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          className="bg-[#45b630]"
        >
          Thêm danh mục
        </Button>
      </div>

      <Card>
        <div className="mb-4">
          <Input
            placeholder="Tìm kiếm danh mục"
            prefix={<SearchOutlined className="text-gray-400" />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="max-w-md"
          />
        </div>

        <Table
          columns={columns}
          dataSource={mockCategories}
          pagination={{
            total: mockCategories.length,
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `${total} mục`,
          }}
          className="ant-table-striped"
        />
      </Card>
    </div>
  );
};

export default BookCategories;