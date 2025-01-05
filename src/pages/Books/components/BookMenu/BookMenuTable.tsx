import React from 'react';
import { Table, Tag, Space, Button, Tooltip, Image, message } from 'antd';
import { CopyOutlined, EditOutlined, DeleteOutlined, FileTextOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuBook } from '../../../../api/menu-book/types';

interface BookMenuTableProps {
  data: MenuBook[];
  loading?: boolean;
}

const BookMenuTable: React.FC<BookMenuTableProps> = ({ data, loading }) => {
  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id)
      .then(() => message.success('Đã sao chép ID'))
      .catch(() => message.error('Không thể sao chép ID'));
  };

  const columns: ColumnsType<MenuBook> = [
    {
      title: 'STT',
      width: 70,
      align: 'center',
      render: (_: any, _record: any, index: number) => index + 1,
    },
    {
      title: 'Ảnh bìa',
      dataIndex: 'cover',
      width: 100,
      render: (cover: string) => (
        <div className="w-[80px] h-[60px]">
          {cover ? (
            <Image
              src={cover}
              alt="Cover"
              className="w-full h-full object-cover rounded-lg shadow-sm"
              preview={{
                mask: 'Xem',
                maskClassName: 'rounded-lg',
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-50 rounded-lg border flex items-center justify-center text-gray-400">
              <span className="text-xs">No image</span>
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      width: 120,
      render: (type: string) => {
        const types = {
          'DE': { text: 'Đề', color: 'purple' },
          'BAI': { text: 'Bài', color: 'blue' },
          'CHUONG': { text: 'Chương', color: 'cyan' },
        };
        const typeInfo = types[type as keyof typeof types] || { text: type, color: 'default' };
        return (
          <Tag color={typeInfo.color} className="rounded-full px-3">
            {typeInfo.text}
          </Tag>
        );
      },
    },
    {
      title: 'Tên',
      dataIndex: 'title',
      render: (title: string) => (
        <span className="font-medium">{title}</span>
      ),
    },
    {
      title: 'ID',
      dataIndex: 'code_id',
      width: 120,
      render: (id: string) => (
        <Space>
          <span>{id}</span>
          <Button
            type="text"
            icon={<CopyOutlined className="text-gray-400 hover:text-gray-600" />}
            size="small"
            onClick={() => handleCopyId(id)}
          />
        </Space>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      width: 120,
      render: (active: boolean) => (
        <Tag color={active ? 'success' : 'error'} className="rounded-full">
          {active ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
        </Tag>
      ),
    },
    {
      title: 'Cập nhật',
      dataIndex: 'updated_at',
      width: 180,
      render: (date: string) => new Date(date).toLocaleString(),
    },
    {
      title: '',
      key: 'actions',
      width: 150,
      fixed: 'right',
      render: (_: any, record: MenuBook) => (
        <Space>
          {record.exam?.file_download && (
            <Tooltip title="Tải xuống">
              <Button 
                type="text" 
                icon={<FileTextOutlined />}
                onClick={() => window.open(record.exam.file_download)}
              />
            </Tooltip>
          )}
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
      loading={loading}
      rowKey="id"
      expandable={{
        showExpandColumn: data.some(item => item.children?.length > 0),
        rowExpandable: (record) => record.children?.length > 0,
      }}
      pagination={{
        total: data.length,
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total) => `${total} mục`,
        className: "px-4",
      }}
      className="ant-table-striped"
      scroll={{ x: 1200 }}
    />
  );
};

export default BookMenuTable;