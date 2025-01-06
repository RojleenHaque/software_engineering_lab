// import sergelImage from '../image/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg';
// import azithroImage from '../image/medicines/azithro.jpg';
// import monasImage from '../image/medicines/monas-10.webp';
// import pantorixImage from '../image/Pantonix 40 Injection-600x600w.jpg.webp';
// import prescriptionMedicine from "../image/Prescription Medicines.webp"
// const Med1 = ()=>{
//   return (
//   <>
//    <div className="heading">
//   <h3 className="p">Prescription Medicine</h3>
//     <div className="view_more">
//       see all
//     </div>
//   </div>
  
// <div class="block1">
// <div className="block1_description">
//     {/* for image section */}
//   <div className="box">
//   <div className="span5">10% Off</div>
//   <img className="image1" src={sergelImage} alt="Sergel 20 mg Capsule" />
//   </div>
//   {/* for description section */}
//  <div className="description">
//   <span class="span1" >Sergel </span> 
//   <span class="span2">20 mg</span><br/>Capsule<br/>
//   <span class="span3"> Esomeprazole Magnesium Trihydrate </span><br/>
// </div>
// <div className="cart">
// <div>
// <span class="span4">MRP Tk 7.00</span><br/>
//    Tk 6.30 /piece<br/>
// </div>
// <button class="button1">Add to cart</button>
// </div>
// </div>


//        {/* {block2} */}
// <div className="block1_description">

//   <div className="box">
//   <div className="span5">10% Off</div>
//   <img className="image2" src={azithroImage} alt="Azithromycin 500 mg" />
//   </div>

// <div className="description2">
//   <span class="span1" >Azithomicyn </span> 
//   <span class="span2">500 mg</span><br/>Capsule<br/>
//   <span class="span3"> Azithromycin  </span><br/>
// </div>

// <div className="cart2">
// <div>
// <span class="span4">MRP Tk 35.00</span><br/>
//    Tk 31.50 /piece<br/>
// </div>
                        
//   <button class="button1">Add to cart</button>
// </div>

// </div>

//     {/* {3rd block} */}

//     <div className="block1_description">

// <div className="box">
// <div className="span5">10% Off</div>
// <img className="image3" src={monasImage} alt="Monas 19 mg" />
// </div>

// <div className="description3">
// <span class="span1" >Monas </span> 
// <span class="span2">19 mg</span><br/>Tablet<br/>
// <span class="span3"> Montelukast  </span><br/>
// </div>

// <div className="cart3">
// <div >
// <span class="span4">MRP Tk 262.00</span><br/> 
// Tk 236.25
// /15's Strip<br/>
// </div>
                      
// <button class="button1">Add to cart</button>
// </div>

// </div>

//     {/* {4th block} */}

//     <div className="block1_description">

// <div className="box">
// <div className="span5">10% Off</div>
// <img className="image3" src={pantorixImage} alt="Pantorix 40 mg" />
// </div>

// <div className="description3">
// <span class="span1" >Pantorix </span> 
// <span class="span2">40 mg</span><br/>Tablet<br/>
// <span class="span3"> Pantoprazole  </span><br/>
// </div>

// <div className="cart3">
// <div>
// <span class="span4">MRP Tk 10.00</span><br/>
//  Tk 6.50 /piece<br/>
// </div>
                      
// <button class="button1">Add to cart</button>
// </div>

// </div>





// </div>   {/*for whole block*/}




//              <div class="description_img">
//             <img class="img1" src={prescriptionMedicine} alt=""/>

//                         <div class="text1">
//                             <h1>Prescribtion Medicine</h1>
//                             <p>This section provides Prescription medicines that require a medical prescription to be dispensed also offers online medicines and healthcare products home delivery in Dhaka as well as all over Bangladesh.</p>
                            
//                         </div> 






//  </div>
//   </>
//   );
// };

// export default Med1;



import React, { useState } from 'react';
import sergelImage from '../image/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg';
import azithroImage from '../image/medicines/azithro.jpg';
import monasImage from '../image/medicines/monas-10.webp';
import pantorixImage from '../image/Pantonix 40 Injection-600x600w.jpg.webp';
import prescriptionMedicine from "../image/Prescription Medicines.webp";
import { useNavigate } from 'react-router-dom';

const Med1 = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Sergel',
      dose: '20 mg',
      type: 'Capsule',
      ingredient: 'Esomeprazole Magnesium Trihydrate',
      price: 6.30,
      description: 'Used to treat acid reflux and heartburn.',
      image: sergelImage
    },
    {
      id: 2,
      name: 'Azithomicyn',
      dose: '500 mg',
      type: 'Capsule',
      ingredient: 'Azithromycin',
      price: 31.50,
      description: 'Used to treat bacterial infections.',
      image: azithroImage
    },
    {
      id: 3,
      name: 'Monas',
      dose: '19 mg',
      type: 'Tablet',
      ingredient: 'Montelukast',
      price: 236.25,
      description: 'Used for asthma and allergies.',
      image: monasImage
    },
    {
      id: 4,
      name: 'Pantorix',
      dose: '40 mg',
      type: 'Tablet',
      ingredient: 'Pantoprazole',
      price: 6.50,
      description: 'Used to treat acid-related stomach issues.',
      image: pantorixImage
    }
  ];

  const handleAddToCart = (product) => {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    navigate('/cart');
  };

  return (
    <>
      <div className="heading">
        <h3 className="p">Prescription Medicine</h3>
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
        <img className="img1" src={prescriptionMedicine} alt="Prescription Medicine" />
        <div className="text1">
          <h1>Prescription Medicine</h1>
          <p>This section provides Prescription medicines that require a medical prescription to be dispensed also offers online medicines and healthcare products home delivery in Dhaka as well as all over Bangladesh.</p>
        </div>
      </div>
    </>
  );
};

export default Med1;
