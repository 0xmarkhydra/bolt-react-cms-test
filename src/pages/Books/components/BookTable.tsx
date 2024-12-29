import React from 'react';
import { Table, Tag, Space, Button, Dropdown } from 'antd';
import { MoreOutlined, PrinterOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { Book } from '../../../api/books/types';

interface BookTableProps {
  data: Book[];
  loading?: boolean;
  onEdit: (book: Book) => void;
  onPrint: (book: Book) => void;
  onDelete: (book: Book) => void;
}

const BookTable: React.FC<BookTableProps> = ({ 
  data, 
  loading,
  onEdit,
  onPrint,
  onDelete
}) => {
  const getActionItems = (record: Book) => [
    {
      key: 'print',
      label: 'In',
      icon: <PrinterOutlined />,
      onClick: () => onPrint(record),
    },
    {
      key: 'edit',
      label: 'Chỉnh sửa',
      icon: <EditOutlined />,
      onClick: () => onEdit(record),
    },
    {
      key: 'delete',
      label: 'Xóa',
      icon: <DeleteOutlined />,
      danger: true,
      onClick: () => onDelete(record),
    },
  ];

  const columns: ColumnsType<Book> = [
    {
      title: 'Ảnh bìa',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 100,
      render: (avatar) => (
        avatar ? (
          <div className="w-[60px] h-[80px] overflow-hidden">
            <img 
              src={avatar} 
              alt="book cover" 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        ) : (
          <div className="w-[60px] h-[80px] bg-gray-100 rounded-sm flex items-center justify-center text-gray-400">
            No image
          </div>
        )
      ),
    },
    {
      title: 'Tên sách',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'ID sách',
      dataIndex: 'code_id',
      key: 'code_id',
      width: 120,
      render: (id) => (
        <Tag color="blue" className="rounded-full">
          {id}
        </Tag>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      width: 120,
      render: (active) => (
        <Tag color={active ? 'success' : 'error'} className="rounded-full">
          {active ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
        </Tag>
      ),
    },
    {
      title: 'Nhà xuất bản',
      dataIndex: 'publishing_house',
      key: 'publishing_house',
      width: 150,
      render: (text) => text || '-',
    },
    {
      title: 'Danh mục',
      key: 'categories',
      width: 200,
      render: (_, record) => (
        <Space wrap>
          {record.book_tags.map((tag) => (
            <Tag key={tag.id} color="purple" className="rounded-full">
              {tag.tag.name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Tác giả',
      key: 'authors',
      width: 200,
      render: (_, record) => (
        <Space wrap>
          {record.authors.map((author) => (
            <Tag key={author.id} className="rounded-full">
              {author.user.full_name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'SL đã xuất',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
      align: 'right',
      render: (quantity) => quantity || 0,
    },
    {
      title: 'Thời gian cập nhật',
      dataIndex: 'updated_at',
      key: 'updated_at',
      width: 150,
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: '',
      key: 'actions',
      fixed: 'right',
      width: 50,
      render: (_, record) => (
        <Dropdown 
          menu={{ items: getActionItems(record) }} 
          trigger={['click']}
          placement="bottomRight"
        >
          <Button
            type="text"
            icon={<MoreOutlined className="text-lg" />}
          />
        </Dropdown>
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