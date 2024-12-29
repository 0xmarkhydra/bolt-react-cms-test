import React from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import { PrinterOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { Book } from '../../../api/books/types';

interface BookTableProps {
  data: Book[];
  loading?: boolean;
  onEdit: (book: Book) => void;
  onPrint: (book: Book) => void;
}

const BookTable: React.FC<BookTableProps> = ({ 
  data, 
  loading,
  onEdit,
  onPrint
}) => {
  const columns: ColumnsType<Book> = [
    {
      title: 'Ảnh bìa',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 80,
      fixed: 'left',
      render: (avatar) => (
        <div className="w-[50px] h-[66px] overflow-hidden">
          {avatar ? (
            <img 
              src={avatar} 
              alt="book cover" 
              className="w-full h-full object-cover rounded-sm"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-sm flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Tên sách',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 200,
      ellipsis: true,
      render: (text) => (
        <Tooltip title={text}>
          <span className="font-medium">{text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'ID sách',
      dataIndex: 'code_id',
      key: 'code_id',
      width: 120,
      render: (id) => (
        <Space>
          {id}
          <Button 
            type="text" 
            size="small" 
            className="text-gray-400"
            onClick={() => navigator.clipboard.writeText(id.toString())}
          >
            <i className="far fa-copy" />
          </Button>
        </Space>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      width: 120,
      render: (active) => (
        <Tag color={active ? 'success' : 'error'} className="rounded-full whitespace-nowrap">
          {active ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
        </Tag>
      ),
    },
    {
      title: 'Nhà xuất bản',
      dataIndex: 'publishing_house',
      key: 'publishing_house',
      width: 150,
      ellipsis: true,
      render: (text) => (
        <Tooltip title={text || '-'}>
          <span>{text || '-'}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Danh mục',
      key: 'categories',
      width: 200,
      render: (_, record) => (
        <div className="flex flex-wrap gap-1">
          {record.book_tags.map((tag) => (
            <Tag 
              color="purple" 
              key={tag.id} 
              className="rounded-full whitespace-nowrap my-0.5"
            >
              {tag.tag.name}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: 'SL đã xuất bản',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 120,
      align: 'right',
    },
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'updated_at',
      key: 'updated_at',
      width: 160,
      render: (date) => new Date(date).toLocaleString(),
      sorter: (a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
    },
    {
      title: '',
      key: 'actions',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <Space>
          <Tooltip title="In">
            <Button 
              type="text" 
              icon={<PrinterOutlined />} 
              onClick={() => onPrint(record)}
            />
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <Button 
              type="text" 
              icon={<EditOutlined />} 
              onClick={() => onEdit(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
        scroll={{ x: 1500 }}
        pagination={{
          total: data.length,
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `${total} items`,
          className: "px-4",
        }}
        className="ant-table-striped"
      />
    </div>
  );
};

export default BookTable;