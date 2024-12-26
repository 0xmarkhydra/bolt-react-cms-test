import { UploadFile } from 'antd/es/upload/interface';

export interface BookFormValues {
  title: string;
  categories: string[];
  subjects: string[];
  authors: string[];
  summary?: string;
  cover?: UploadFile;
}

export interface BookFormDrawerProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: BookFormValues) => void;
  initialValues?: Partial<BookFormValues>;
  title?: string;
}