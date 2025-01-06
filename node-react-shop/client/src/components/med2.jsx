// import React from 'react';
// import alatrolImage from '../image/otc/alatrol-10-mg.webp';
// import burnaImage from '../image/otc/burna.webp';
// import napaImage from '../image/otc/napa-tablet-500mg-10-tablets.jpeg';
// import viodinImage from '../image/otc/viodin.png';
// import otcDescriptionImage from '../image/otc/OTC Medicines.webp';

// const OTC_medicine = () => {
//   return (
//     <>
//       <div className="heading">
//         <h3 className="p">OTC Medicine</h3>
//         <div className="view_more">see all</div>
//       </div>

//       <div className="block1">
//         {/* Block 1 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image1" src={alatrolImage} alt="Alatrol 10 mg" />
//           </div>
//           <div className="description">
//             <span className="span1">Alatrol</span>
//             <span className="span2">10 mg</span>
//             <br /> Tablet
//             <br />
//             <span className="span3">Cetirizine Hydrochloride [Oral]</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 3.00</span>
//               <br />
//               Tk 2.30 /piece
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>

//         {/* Block 2 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image2" src={burnaImage} alt="Burna 1% Cream" />
//           </div>
//           <div className="description">
//             <span className="span1">Burna</span>
//             <span className="span2">1%</span>
//             <br /> Cream
//             <br />
//             <span className="span3">Silver Sulfadiazine</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 60.00</span>
//               <br />
//               Tk 54.50 /25gm tube
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>

//         {/* Block 3 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image3" src={napaImage} alt="Napa 500 mg" />
//           </div>
//           <div className="description">
//             <span className="span1">Napa</span>
//             <span className="span2">500 mg</span>
//             <br /> Tablet
//             <br />
//             <span className="span3">Paracetamol</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 1.50</span>
//               <br />
//               Tk 1.08 /piece
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>

//         {/* Block 4 */}
//         <div className="block1_description">
//           <div className="box">
//             <div className="span5">10% Off</div>
//             <img className="image3" src={viodinImage} alt="Viodin 10% Solution" />
//           </div>
//           <div className="description">
//             <span className="span1">Viodin</span>
//             <span className="span2">10%</span>
//             <br /> Solution
//             <br />
//             <span className="span3">Povidone Iodine</span>
//             <br />
//           </div>
//           <div className="cart">
//             <div>
//               <span className="span4">MRP Tk 120.00</span>
//               <br />
//               Tk 108.00 /100 ml bottle
//               <br />
//             </div>
//             <button className="button1">Add to cart</button>
//           </div>
//         </div>
//       </div>

//       <div className="description_img">
//         <img className="img1" src={otcDescriptionImage} alt="OTC Medicines" />
//         <div className="text1">
//           <h1>OTC Medicine</h1>
//           <p>
//             OTC medicine refers to the medicine which anyone can buy without a prescription. People take OTC medicines to treat health issues without a
//             prescription. OTC medicines treat a variety of illnesses and their symptoms, including pain, coughs and colds, diarrhea, constipation, acne,
//             and others.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OTC_medicine;


import React, { useState } from 'react';
import alatrolImage from '../image/otc/alatrol-10-mg.webp';
import burnaImage from '../image/otc/burna.webp';
import napaImage from '../image/otc/napa-tablet-500mg-10-tablets.jpeg';
import viodinImage from '../image/otc/viodin.png';
import otcDescriptionImage from '../image/otc/OTC Medicines.webp';
import { useNavigate } from 'react-router-dom';

const OTCMedicine = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Alatrol',
      dose: '10 mg',
      type: 'Tablet',
      ingredient: 'Cetirizine Hydrochloride [Oral]',
      price: 2.30,
      description: 'Used to treat allergies and hay fever.',
      image: alatrolImage
    },
    {
      id: 2,
      name: 'Burna',
      dose: '1%',
      type: 'Cream',
      ingredient: 'Silver Sulfadiazine',
      price: 54.50,
      description: 'Used for burns and wound infections.',
      image: burnaImage
    },
    {
      id: 3,
      name: 'Napa',
      dose: '500 mg',
      type: 'Tablet',
      ingredient: 'Paracetamol',
      price: 1.08,
      description: 'Used for pain relief and fever reduction.',
      image: napaImage
    },
    {
      id: 4,
      name: 'Viodin',
      dose: '10%',
      type: 'Solution',
      ingredient: 'Povidone Iodine',
      price: 108.00,
      description: 'Used as an antiseptic for skin disinfection.',
      image: viodinImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">OTC Medicine</h3>
        <div className="view_more">see all</div>
      </div>

      <div className="block1">
        {products.map((product) => (
          <div className="block1_description" key={product.id}>
            <div className="box">
              <div className="span5">10% Off</div>
              <img className="image1" src={product.image} alt={`${product.name} ${product.dose}`} />
            </div>

            <div className="description">
              <span className="span1">{product.name}</span>
              <span className="span2">{product.dose}</span><br />
              {product.type}<br />
              <span className="span3">{product.ingredient}</span><br />
              <p>{product.description}</p>
            </div>

            <div className="cart">
              <div>
                <span className="span4">MRP Tk {product.price.toFixed(2)}</span><br />
                Tk {product.price.toFixed(2)} /piece<br />
              </div>
              <button className="button1" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="description_img">
        <img className="img1" src={otcDescriptionImage} alt="OTC Medicines" />
        <div className="text1">
          <h1>OTC Medicine</h1>
          <p>
            OTC medicine refers to medicines that can be purchased without a prescription. They are used to treat common ailments like pain, coughs, colds, and skin infections.
          </p>
        </div>
      </div>
    </>
  );
};

export default OTCMedicine;
