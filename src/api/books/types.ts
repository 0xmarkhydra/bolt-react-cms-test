export interface GetBooksParams {
  take?: number;
  page?: number;
  sort_field?: string;
  sort_type?: 'ASC' | 'DESC';
  search?: string;
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

// Rest of the types remain the same...