import React from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import { PrinterOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { BookData } from '../types';

const BookTable: React.FC<{ data: BookData[] }> = ({ data }) => {
  const columns: ColumnsType<BookData> = [
    {
      title: 'Ảnh bìa',
      dataIndex: 'cover',
      key: 'cover',
      width: 80,
      render: (cover) => <img src={cover} alt="book cover" className="w-10 h-10 object-cover rounded" />,
    },
    {
      title: 'Tên sách',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'ID sách',
      dataIndex: 'bookId',
      key: 'bookId',
      render: (id) => (
        <Space>
          {id}
          <Button type="text" size="small" className="text-gray-400">
            <i className="far fa-copy" />
          </Button>
        </Space>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'success' : 'error'} className="rounded-full">
          {status === 'active' ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
        </Tag>
      ),
    },
    {
      title: 'Nhà xuất bản',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <Tag color="purple" className="rounded-full">
          {category}
        </Tag>
      ),
    },
    {
      title: 'SL đã xuất bản',
      dataIndex: 'totalPublished',
      key: 'totalPublished',
      align: 'right',
    },
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      sorter: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    },
    {
      title: '',
      key: 'actions',
      width: 120,
      render: () => (
        <Space>
          <Tooltip title="In">
            <Button type="text" icon={<PrinterOutlined />} />
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <Button type="text" icon={<EditOutlined />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        total: data.length,
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total) => `${total} items`,
      }}
      className="ant-table-striped"
    />
  );
};

export default BookTable;