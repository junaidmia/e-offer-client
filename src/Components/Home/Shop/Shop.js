import React from 'react';
import './Shop.css'

const Shop = () => {
    const ShopData=[
        {
            id: '',
            name:'Evaly',
            img:''
        },
        {
            id: '',
            name:'Dhamaka',
            img:''
        },
        {
            id: '',
            name:'Alesha Mart',
            img:''
        },
    ]
    return (
       <section>
           <div className="container">
               <div className="p-5 pb-5">
                   <h2>Shop</h2>
               </div>
               <div className="row">
                   {
                       ShopData.map(shop => 
                       <div className="col-md-4">
                            <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{shop.name}</h5>
                          
                        </div>
                      </div>
                       </div>

                     )
                   }
               </div>
           </div>
       </section>
    );
};

export default Shop;