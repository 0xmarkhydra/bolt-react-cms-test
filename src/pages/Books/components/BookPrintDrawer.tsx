import React, { useState, useEffect } from 'react';
import { Drawer, Input, Button, message, Spin } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { printBook, getPublishHistory } from '../../../api/books';
import type { PublishHistory } from '../../../api/books/types';

interface BookPrintDrawerProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: (quantity: number) => void;
  bookTitle: string;
  bookId: string;
}

const BookPrintDrawer: React.FC<BookPrintDrawerProps> = ({
  open,
  onClose,
  bookTitle,
  bookId,
}) => {
  const [quantity, setQuantity] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [history, setHistory] = useState<PublishHistory[]>([]);

  useEffect(() => {
    if (open && bookId) {
      loadHistory();
    }
  }, [open, bookId]);

  const loadHistory = async () => {
    try {
      setLoading(true);
      const response = await getPublishHistory(bookId);
      // Sort history by timestamp in descending order (newest first)
      const sortedHistory = [...response.data].sort((a, b) => b.timestamp - a.timestamp);
      setHistory(sortedHistory);
    } catch (error) {
      message.error('Không thể tải lịch sử xuất bản');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) {
      message.error('Vui lòng nhập số lượng hợp lệ');
      return;
    }

    try {
      setPublishing(true);
      await printBook(bookId, Number(quantity));
      message.success('Xuất bản thành công');
      setQuantity('');
      await loadHistory(); // Reload history after successful publish
    } catch (error: any) {
      message.error(error.message || 'Có lỗi xảy ra khi xuất bản');
    } finally {
      setPublishing(false);
    }
  };

  return (
    <Drawer
      title="Xác nhận thêm tài khoản ID sách?"
      open={open}
      onClose={onClose}
      width={800}
      extra={[
        <Button key="cancel" onClick={onClose}>
          Hủy bỏ
        </Button>,
        <Button
          key="confirm"
          type="primary"
          onClick={handleConfirm}
          loading={publishing}
          className="bg-[#45b630] ml-4"
        >
          Đồng ý
        </Button>,
      ]}
    >
      <div className="flex flex-col h-full">
        <p className="text-gray-600 mb-6">
          Khi bạn đồng ý thì ngay lập tức sẽ tạo ra một phiên bản mới của sách "{bookTitle}".
          Bạn có chắc chắn muốn thêm ID sách không?
        </p>

        <div className="bg-gray-50 p-6 rounded-lg flex-1">
          <h3 className="font-medium mb-4">
            Lịch sử xuất bản trước đây ({history.length} lần xuất bản)
          </h3>
          
          <div className="space-y-3">
            <label className="block mb-2">
              <span className="text-red-500">*</span> Số lượng xuất bản thêm
            </label>
            <Input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Nhập số lượng"
              size="large"
              type="number"
              min={1}
            />
          </div>

          {loading ? (
            <div className="flex justify-center py-8">
              <Spin tip="Đang tải..." />
            </div>
          ) : (
            <div className="mt-6 max-h-[60vh] overflow-y-auto">
              {history.map((item) => (
                <div
                  key={item.timestamp}
                  className="bg-white p-4 mb-2 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-500">
                      Xuất {item.amount} bản • {new Date(item.time).toLocaleDateString()}
                    </div>
                  </div>
                  <Button
                    type="link"
                    icon={<DownloadOutlined />}
                    onClick={() => window.open(item.url)}
                    className="text-[#45b630] hover:text-[#3a9828]"
                  >
                    Tải xuống
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default BookPrintDrawer;