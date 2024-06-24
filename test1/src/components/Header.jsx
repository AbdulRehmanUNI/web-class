import React from 'react'
import Product from './Product'
import Cart from './Cart'

function Header() {
  return (
    <>
        <div>Header</div>
        <Cart/>
        <div style={{display:"flex", margin:"50px"}}>
        <Product title="Shirt" description="A nice cotton shirt" img="/path/to/shirt/image.png" />
        <Product title="Shirt" description="A nice cotton shirt" img="/path/to/shirt/image.png" />
        <Product title="Shirt" description="A nice cotton shirt" img="/path/to/shirt/image.png" />
        
        </div>


    </>
  )
}

export default Header