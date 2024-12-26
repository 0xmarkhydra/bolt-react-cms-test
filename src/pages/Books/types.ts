export interface BookData {
  key: string;
  cover: string;
  title: string;
  bookId: string;
  status: 'active' | 'inactive';
  publisher: string;
  category: string;
  totalPublished: number;
  updatedAt: string;
}

export interface BookListHeaderProps {
  totalBooks: number;
  onRefresh: () => void;
  onAddNew: () => void;
}

export interface BookSearchProps {
  value: string;
  onChange: (value: string) => void;
}

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