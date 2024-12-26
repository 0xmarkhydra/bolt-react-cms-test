import React from 'react';
import { Modal, Input, Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

interface BookPrintModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (quantity: number) => void;
  bookTitle: string;
  publishDate: string;
  currentQuantity: number;
}

const BookPrintModal: React.FC<BookPrintModalProps> = ({
  open,
  onClose,
  onConfirm,
  bookTitle,
  publishDate,
  currentQuantity,
}) => {
  const [quantity, setQuantity] = React.useState<string>('');

  const handleConfirm = () => {
    onConfirm(Number(quantity));
    setQuantity('');
  };

  // Mock history data
  const publishHistory = Array.from({ length: 10 }, (_, index) => ({
    version: 9 - index,
    date: new Date(new Date(publishDate).getTime() - index * 24 * 60 * 60 * 1000).toLocaleString(),
    quantity: Math.floor(Math.random() * 100) + 50,
  }));

  return (
    <Modal
      title="Xác nhận thêm tài khoản ID sách?"
      open={open}
      onCancel={onClose}
      width={800}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Hủy bỏ
        </Button>,
        <Button
          key="confirm"
          type="primary"
          onClick={handleConfirm}
          className="bg-[#45b630]"
        >
          Đồng ý
        </Button>,
      ]}
    >
      <div className="space-y-6">
        <p className="text-gray-600">
          Khi bạn đồng ý thì ngay lập tức sẽ tạo ra một phiên bản mới của sách "{bookTitle}". 
          Bạn có chắc chắn muốn thêm ID sách không?
        </p>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-medium mb-4">Lịch sử xuất bản trước đây ({publishHistory.length} lần xuất bản)</h3>
          
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {publishHistory.map((history) => (
              <div 
                key={history.version}
                className="bg-white p-4 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="font-medium">
                    Sách - {bookTitle} - Xuất lần {history.version} ngày {history.date}
                  </div>
                  <div className="text-gray-500">
                    Xuất {history.quantity} bản • {history.date}
                  </div>
                </div>
                <Button 
                  type="link" 
                  icon={<DownloadOutlined />}
                  className="text-[#45b630] hover:text-[#3a9828]"
                >
                  Tải xuống
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div>
          <label className="block mb-2">
            <span className="text-red-500">*</span> Số lượng xuất bản thêm
          </label>
          <Input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Nhập số lượng"
            size="large"
          />
        </div>
      </div>
    </Modal>
  );
};

export default BookPrintModal;