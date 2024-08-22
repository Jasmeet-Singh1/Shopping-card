import Product from './Components/Product';
import Cart from './Components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const products = [
    {
      id: 1,
      name: 'Coffee mug',
      image: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
      quantity: 1,
      price: 3,
    },
    {
      id: 2,
      name: 'Tea pot',
      image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
      quantity: 1,
      price: 25,
    },
    {
      id: 3,
      name: 'Laptop',
      image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102',
      quantity: 1,
      price: 39,
    },
    {
      id: 4,
      name: 'Chair',
      image: 'https://images.unsplash.com/photo-1442458017215-285b83f65851',
      quantity: 1,
      price: 129,
    },
    {
      id: 5,
      name: 'Jacket',
      image: 'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
      quantity: 1,
      price: 50,
    },
    {
      id: 6,
      name: 'Chia seeds',
      image: 'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
      quantity: 1,
      price: 69,
    },
  ];

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  return (
    <>
      <ToastContainer />
      <div className='flex gap-96 bg-slate-700 pt-16 px-10'>
        <div className=' text-cyan-50 h-screen grid grid-cols-3 w-fit gap-10'>
          {products.map((item, index) => (
            <Product product={item} key={index} setSelectedProductIds={setSelectedProductIds} />
          ))}
        </div>
        <div>
          <Cart
            products={products}
            selectedProductIds={selectedProductIds}
            setSelectedProductIds={setSelectedProductIds}
          />
        </div>
      </div>
    </>
  );
}

export default App;
