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