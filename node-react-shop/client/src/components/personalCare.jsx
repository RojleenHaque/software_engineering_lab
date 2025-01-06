// import React from 'react';
// import listacareImage from '../image/personal/listacare.webp';
// import listerGoldImage from '../image/personal/IMG-20231019-WA0497.webp';
// import mediPlusImage from '../image/personal/mediplas.webp';
// import orastarImage from '../image/personal/orastar.webp';
// import personalCareImage from '../image/personal/Personal Care Products.webp';

// const PersonalCare = () => {
//   return (
//     <>
//       <div className="heading">
//         <h3 className="p">Dental and Personal Care Products</h3>
//         <div className="view_more">see all</div>
//       </div>

//       <div className="block1">
//         {/* Block 1 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image1" src={listacareImage} alt="Listacare Blue Mint 120 ml" />
//           </div>
//           <div className="description">
//             <span className="span1">Listacare Blue Mint</span>
//             <span className="span2">120 ml</span>
//             <br /> Mouthwash
//             <br />
//             <span className="span3">Menthol + Thymol</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 80.00</span>
//               <br />
//               Tk 72.00 /120 ml bottle
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>

//         {/* Block 2 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image2" src={listerGoldImage} alt="Lister Gold 120 ml" />
//           </div>
//           <div className="description">
//             <span className="span1">Lister Gold</span>
//             <span className="span2">120 ml</span>
//             <br /> Mouthwash
//             <br />
//             <span className="span3">Menthol + Thymol</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 80.00</span>
//               <br />
//               Tk 72.00 /120 ml bottle
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>

//         {/* Block 3 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image3" src={mediPlusImage} alt="MediPlus 140 gm" />
//           </div>
//           <div className="description">
//             <span className="span1">MediPlus</span>
//             <span className="span2">140 gm</span>
//             <br /> Toothpaste
//             <br />
//             <span className="span3">Ultimate Dental Care</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 90.00</span>
//               <br />
//               Tk 85.50 /140 gm tube
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>

//         {/* Block 4 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image3" src={orastarImage} alt="Orastar Plus 250 ml" />
//           </div>
//           <div className="description">
//             <span className="span1">Orastar Plus</span>
//             <span className="span2">250 ml</span>
//             <br /> Mouthwash
//             <br />
//             <span className="span3">Eucalyptol + Menthol</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 150.00</span>
//               <br />
//               Tk 135.00 /250 ml bottle
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>
//       </div>

//       <div className="description_img">
//         <img className="img1" src={personalCareImage} alt="Dental and Personal Care Products" />
//         <div className="text1">
//           <h1>Dental and Personal Care Products</h1>
//           <p>
//             Here we have a vast collection of personal care products, including shampoo, lotion, cream, soap, and more, designed to cater to your
//             everyday grooming needs. From nourishing formulas to luxurious fragrances, elevate your self-care routine with our diverse range of
//             high-quality essentials.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonalCare;

import React, { useState } from 'react';
import listacareImage from '../image/personal/listacare.webp';
import listerGoldImage from '../image/personal/IMG-20231019-WA0497.webp';
import mediPlusImage from '../image/personal/mediplas.webp';
import orastarImage from '../image/personal/orastar.webp';
import personalCareImage from '../image/personal/Personal Care Products.webp';
import { useNavigate } from 'react-router-dom';

const PersonalCare = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Listacare Blue Mint',
      size: '120 ml',
      type: 'Mouthwash',
      ingredient: 'Menthol + Thymol',
      price: 72.00,
      description: 'Provides fresh breath and oral hygiene.',
      image: listacareImage
    },
    {
      id: 2,
      name: 'Lister Gold',
      size: '120 ml',
      type: 'Mouthwash',
      ingredient: 'Menthol + Thymol',
      price: 72.00,
      description: 'Gold-standard mouthwash for daily care.',
      image: listerGoldImage
    },
    {
      id: 3,
      name: 'MediPlus',
      size: '140 gm',
      type: 'Toothpaste',
      ingredient: 'Ultimate Dental Care',
      price: 85.50,
      description: 'Ensures complete dental protection.',
      image: mediPlusImage
    },
    {
      id: 4,
      name: 'Orastar Plus',
      size: '250 ml',
      type: 'Mouthwash',
      ingredient: 'Eucalyptol + Menthol',
      price: 135.00,
      description: 'Antiseptic mouthwash for gum care.',
      image: orastarImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">Dental and Personal Care Products</h3>
        <div className="view_more">see all</div>
      </div>

      <div className="block1">
        {products.map((product) => (
          <div className="block1_description" key={product.id}>
            <div className="box">
              <div className="span5">10% Off</div>
              <img className="image1" src={product.image} alt={`${product.name} ${product.size}`} />
            </div>

            <div className="description">
              <span className="span1">{product.name}</span>
              <span className="span2">{product.size}</span><br />
              {product.type}<br />
              <span className="span3">{product.ingredient}</span><br />
              <p>{product.description}</p>
            </div>

            <div className="cart">
              <div>
                <span className="span4">MRP Tk {product.price.toFixed(2)}</span><br />
                Tk {product.price.toFixed(2)} /unit<br />
              </div>
              <button className="button1" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="description_img">
        <img className="img1" src={personalCareImage} alt="Dental and Personal Care Products" />
        <div className="text1">
          <h1>Dental and Personal Care Products</h1>
          <p>
            Discover a variety of personal care products, including mouthwash, toothpaste, and more, designed to meet your grooming needs. Elevate your self-care routine with high-quality essentials for daily use.
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalCare;
