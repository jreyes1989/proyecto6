import React from 'react'

const PurchaseCard = ({purchase}) => {

    console.log(purchase);

    const datePurchase = new Date(purchase.createdAt)

  return (
    <article className='cambiar'>
        <header>
            <h3>{datePurchase.toLocaleDateString()}</h3>
            <div>
                <ul>
                    {
                        purchase.cart.products.map( prod => (
                            <li key={prod.id}>
                                <h4>{prod.title}</h4>
                                <span>{prod.productsInCart.quantity}</span>
                                <span>{prod.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    </article>
  )
}

export default PurchaseCard