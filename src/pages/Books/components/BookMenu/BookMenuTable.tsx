import React from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import { DownloadOutlined, EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface MenuItem {
  key: string;
  stt: number;
  thumbnail: string;
  type: string;
  title: string;
  id: string;
  updatedAt: string;
}

const BookMenuTable: React.FC = () => {
  // Mock data
  const data: MenuItem[] = [
    {
      key: '1',
      stt: 1,
      thumbnail: 'https://via.placeholder.com/60x80',
      type: 'Bộ đề',
      title: 'Đề 1',
      id: '00681',
      updatedAt: '20:50 15/12/2024'
    }
  ];

  const columns: ColumnsType<MenuItem> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 80,
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: 100,
      render: (thumbnail) => (
        <div className="w-[60px] h-[80px]">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      ),
    },
    {
      title: 'Loại bài',
      dataIndex: 'type',
      key: 'type',
      width: 120,
      render: (type) => (
        <Tag color="purple" className="rounded-full">
          {type}
        </Tag>
      ),
    },
    {
      title: 'Tên bài',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 120,
      render: (id) => (
        <Space>
          <span>{id}</span>
          <Button
            type="text"
            icon={<DownloadOutlined className="text-gray-400 hover:text-gray-600" />}
            size="small"
          />
        </Space>
      ),
    },
    {
      title: 'Lần cuối cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 200,
    },
    {
      title: '',
      key: 'actions',
      width: 120,
      render: () => (
        <Space>
          <Tooltip title="Thêm">
            <Button type="text" icon={<PlusOutlined />} />
          </Tooltip>
          <Tooltip title="Sửa">
            <Button type="text" icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button type="text" danger icon={<DeleteOutlined />} />
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

export default BookMenuTable;