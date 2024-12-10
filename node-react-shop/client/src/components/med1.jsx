const Med1 = ()=>{
  return (
  <>
   <div className="heading">
  <h3 className="p">Prescription Medicine</h3>
    <div className="view_more">
      see all
    </div>
  </div>
  
<div class="block1">
<div className="block1_description">
    {/* for image section */}
  <div className="box">
  <div className="span5">10% Off</div>
  <img className="image1" src="./image/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg" alt=""/>
  </div>
  {/* for description section */}
 <div className="description">
  <span class="span1" >Sergel </span> 
  <span class="span2">20 mg</span><br/>Capsule<br/>
  <span class="span3"> Esomeprazole Magnesium Trihydrate </span><br/>
</div>
<div className="cart">
<div>
<span class="span4">MRP Tk 7.00</span><br/>
   Tk 6.30 /piece<br/>
</div>
<button class="button1">Add to cart</button>
</div>
</div>


       {/* {block2} */}
<div className="block1_description">

  <div className="box">
  <div className="span5">10% Off</div>
  <img className="image2" src="./image/medicines/azithro.jpg" alt=""/>
  </div>

<div className="description2">
  <span class="span1" >Azithomicyn </span> 
  <span class="span2">500 mg</span><br/>Capsule<br/>
  <span class="span3"> Azithromycin  </span><br/>
</div>

<div className="cart2">
<div>
<span class="span4">MRP Tk 35.00</span><br/>
   Tk 31.50 /piece<br/>
</div>
                        
  <button class="button1">Add to cart</button>
</div>

</div>

    {/* {3rd block} */}

    <div className="block1_description">

<div className="box">
<div className="span5">10% Off</div>
<img className="image3" src="./image/medicines/monas-10.webp" alt=""/>
</div>

<div className="description3">
<span class="span1" >Monas </span> 
<span class="span2">19 mg</span><br/>Tablet<br/>
<span class="span3"> Montelukast  </span><br/>
</div>

<div className="cart3">
<div >
<span class="span4">MRP Tk 262.00</span><br/> 
Tk 236.25
/15's Strip<br/>
</div>
                      
<button class="button1">Add to cart</button>
</div>

</div>

    {/* {4th block} */}

    <div className="block1_description">

<div className="box">
<div className="span5">10% Off</div>
<img className="image3" src="./image/Pantonix 40 Injection-600x600w.jpg.webp" alt=""/>
</div>

<div className="description3">
<span class="span1" >Pantorix </span> 
<span class="span2">40 mg</span><br/>Tablet<br/>
<span class="span3"> Pantoprazole  </span><br/>
</div>

<div className="cart3">
<div>
<span class="span4">MRP Tk 10.00</span><br/>
 Tk 6.50 /piece<br/>
</div>
                      
<button class="button1">Add to cart</button>
</div>

</div>





</div>   {/*for whole block*/}




             <div class="description_img">
            <img class="img1" src="./image/Prescription Medicines.webp" alt=""/>

                        <div class="text1">
                            <h1>Prescribtion Medicine</h1>
                            <p>This section provides Prescription medicines that require a medical prescription to be dispensed also offers online medicines and healthcare products home delivery in Dhaka as well as all over Bangladesh.</p>
                            
                        </div> 






 </div>
  </>
  );
};

export default Med1;