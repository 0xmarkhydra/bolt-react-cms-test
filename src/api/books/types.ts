import type { Exam } from '../exams/types';

export interface Book {
  id: string;
  name: string;
  description: string;
  avatar: string;
  code_id: number;
  quantity: number;
  active: boolean;
  publishing_house: string | null;
  subject: string | null;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  expiration_date: number;
  book_tags: BookTag[];
  authors: Author[];
}

export interface BookTag {
  id: string;
  tag: {
    id: string;
    name: string;
  };
}

export interface Author {
  id: string;
  user: {
    id: string;
    full_name: string;
  };
}

export interface UpdateBookPayload {
  name: string;
  description?: string;
  avatar?: string;
  expiration_date: number;
  is_public: boolean;
  tags?: string;
  authors?: string;
  publishing_house?: string;
  subject?: string;
}

export interface PublishHistory {
  name: string;
  url: string;
  time: string;
  amount: number;
  timestamp: number;
}

export interface PublishResponse {
  messages: string;
  data: PublishHistory;
  status_code: number;
}

export interface PublishHistoryResponse {
  messages: string;
  data: PublishHistory[];
  status_code: number;
}