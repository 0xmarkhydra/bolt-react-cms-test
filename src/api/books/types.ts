import type { Teacher } from '../users/types';
import type { Category } from '../categories/types';

export interface BookTag {
  id: string;
  book_id: string;
  tag_id: string;
  tag: Category;
}

export interface BookAuthor {
  id: string;
  book_id: string;
  user_id: string;
  user: Teacher;
}

export interface Book {
  id: string;
  code_id: number;
  name: string;
  description: string;
  avatar: string;
  quantity: number;
  expiration_date: number;
  active: boolean;
  publishing_house: string | null;
  subject: string | null;
  is_file: boolean;
  file_download: string | null;
  xlsx_files: Array<{
    name: string;
    url: string;
    time: string;
    amount?: number;
    timestamp?: number;
  }>;
  book_tags: BookTag[];
  authors: BookAuthor[];
  created_at: string;
  updated_at: string;
}

export interface BooksResponse {
  messages: string;
  data: {
    pagination: {
      current_page: number;
      total_pages: number;
      take: number;
      total: number;
    };
    data: Book[];
  };
  status_code: number;
}

export interface GetBooksParams {
  take?: number;
  page?: number;
  sort_field?: string;
  sort_type?: 'ASC' | 'DESC';
}