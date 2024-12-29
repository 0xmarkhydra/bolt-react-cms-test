export interface BookFormValues {
  title: string;
  categories?: string[];
  subjects?: string;
  authors?: string[];
  publisher?: string;
  summary?: string;
  cover?: any;
  expiration_date?: number;
}

export interface BookFormDrawerProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: BookFormValues) => void;
  initialValues?: Partial<BookFormValues>;
  title?: string;
}

export interface BookFormModalProps extends Omit<BookFormDrawerProps, 'onClose'> {
  onCancel: () => void;
}