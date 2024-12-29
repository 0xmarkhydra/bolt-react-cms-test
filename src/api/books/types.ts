export interface CreateBookPayload {
  avatar: string;
  name: string;
  tags?: string;
  authors?: string;
  expiration_date?: number;
  description?: string;
  publishing_house?: string;
  subject?: string;
}

export interface BookResponse {
  id: string;
  user_id: string;
  avatar: string;
  name: string;
  name_search: string;
  description: string;
  expiration_date: number;
  code_id: number;
  quantity: number | null;
  active: boolean;
  publishing_house: string | null;
  subject: string | null;
  is_file: boolean;
  file_download: string | null;
  xlsx_files: any[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}