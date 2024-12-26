// Category related types
export interface Category {
  key: string;
  name: string;
  totalBooks: number;
  status: 'active' | 'inactive';
  description: string;
  children?: Category[];
}

export interface CategoryDetailsProps {
  category: Category | null;
  onClose: () => void;
  onEdit: (category: Category) => void;
  onDelete: (key: string) => void;
}

// Book subject types
export enum Subjects {
  // Nhóm môn bắt buộc
  Toan = 'Toán',
  NguVan = 'Ngữ văn',
  NgoaiNgu = 'Ngoại ngữ',

  // Nhóm môn Khoa học Tự nhiên
  VatLy = 'Vật lý',
  HoaHoc = 'Hóa học',
  SinhHoc = 'Sinh học',

  // Nhóm môn Khoa học Xã hội
  LichSu = 'Lịch sử',
  DiaLy = 'Địa lý',
  GiaoDucCongDan = 'Giáo dục công dân',

  // Nhóm môn bổ trợ
  TinHoc = 'Tin học',
  CongNghe = 'Công nghệ',

  // Môn Giáo dục thể chất và quốc phòng
  TheDuc = 'Thể dục',
  GiaoDucQuocPhong = 'Giáo dục quốc phòng và an ninh',

  // Môn Nghề phổ thông
  HocNghe = 'Học nghề',
}