import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const data = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 5,
  },
  {
    id: '2000',
    code: 'f230fh0g4',
    name: 'Tamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 66,
    category: 'Bccessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
  },
];

const List = () => {
  const [products, setProducts] = useState<Product[]>(data);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  //   useEffect(() => {
  //     ProductService.getProductsMini().then((data) => setProducts(data));
  //   }, []);

  return (
    <div>
      <DataTable
        value={products}
        tableStyle={{ minWidth: '50rem' }}
        onSelectionChange={(e) => setSelectedProduct(e.value as Product)}
        selection={selectedProduct}
        selectionMode='radiobutton'
        dataKey='id'>
        <Column selectionMode='single' headerStyle={{ width: '3rem' }}></Column>
        <Column
          field='code'
          header='Code'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='name'
          header='Name'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='category'
          header='Category'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
        <Column
          field='quantity'
          header='Quantity'
          sortable
          style={{ width: '25%' }}></Column>
      </DataTable>
    </div>
  );
};

export default List;
