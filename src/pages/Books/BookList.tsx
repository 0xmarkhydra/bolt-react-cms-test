import React from 'react';
import { Table, Card } from 'antd';

const BookList: React.FC = () => {
  return (
    <Card title="Danh sách sách">
      <Table 
        columns={[
          { title: 'Tên sách', dataIndex: 'name' },
          { title: 'Tác giả', dataIndex: 'author' },
          { title: 'Danh mục', dataIndex: 'category' },
        ]}
        dataSource={[]}
      />
    </Card>
  );
};

export default BookList;