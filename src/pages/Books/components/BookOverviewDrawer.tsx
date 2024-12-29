import React from 'react';
import { Drawer, Descriptions, Tag, Space } from 'antd';
import type { Book } from '../../../api/books/types';

interface BookOverviewDrawerProps {
  book: Book | null;
  open: boolean;
  onClose: () => void;
}

const BookOverviewDrawer: React.FC<BookOverviewDrawerProps> = ({
  book,
  open,
  onClose,
}) => {
  if (!book) return null;

  return (
    <Drawer
      title="Tổng quan sách"
      open={open}
      onClose={onClose}
      width={700}
    >
      <div className="space-y-8">
        {/* Book Cover and Basic Info */}
        <div className="flex gap-6">
          {book.avatar ? (
            <img
              src={book.avatar}
              alt={book.name}
              className="w-[200px] h-[266px] object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="w-[200px] h-[266px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              No image
            </div>
          )}
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">{book.name}</h2>
            <Descriptions column={1} className="mb-4">
              <Descriptions.Item label="ID Sách">{book.code_id}</Descriptions.Item>
              <Descriptions.Item label="Nhà xuất bản">
                {book.publishing_house || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Môn học">
                {book.subject || '-'}
              </Descriptions.Item>
              <Descriptions.Item label="Số lượng đã xuất">
                {book.quantity || 0}
              </Descriptions.Item>
            </Descriptions>

            <Space className="mb-2">
              <Tag color={book.active ? 'success' : 'error'} className="rounded-full">
                {book.active ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
              </Tag>
              <Tag color={book.is_public ? 'blue' : 'default'} className="rounded-full">
                {book.is_public ? 'Công khai' : 'Riêng tư'}
              </Tag>
            </Space>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Mô tả</h3>
          <p className="text-gray-600">{book.description || 'Không có mô tả'}</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Danh mục</h3>
          <Space wrap>
            {book.book_tags.length > 0 ? (
              book.book_tags.map((tag) => (
                <Tag key={tag.id} color="purple" className="rounded-full">
                  {tag.tag.name}
                </Tag>
              ))
            ) : (
              <span className="text-gray-500">Chưa có danh mục</span>
            )}
          </Space>
        </div>

        {/* Authors */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tác giả</h3>
          <Space wrap>
            {book.authors.length > 0 ? (
              book.authors.map((author) => (
                <Tag key={author.id} className="rounded-full">
                  {author.user.full_name}
                </Tag>
              ))
            ) : (
              <span className="text-gray-500">Chưa có tác giả</span>
            )}
          </Space>
        </div>

        {/* Additional Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Thông tin thêm</h3>
          <Descriptions column={1}>
            <Descriptions.Item label="Thời hạn sử dụng">
              {book.expiration_date} tháng
            </Descriptions.Item>
            <Descriptions.Item label="Ngày tạo">
              {new Date(book.created_at).toLocaleString()}
            </Descriptions.Item>
            <Descriptions.Item label="Cập nhật lần cuối">
              {new Date(book.updated_at).toLocaleString()}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Drawer>
  );
};

export default BookOverviewDrawer;