import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import FilterCategory from '../components/Home/FilterCategory';
import FilterPrice from '../components/Home/FilterPrice';
import ToOrderProducts from '../components/Home/ToOrderProducts';
import './styles/home.css'


const Home = () => {

    const [productsFilter, setProductsFilter] = useState()

    const [inputValue, setInputValue] = useState("")

    const [inputPrice, setInputPrice] = useState({
        from:0,
        to:Infinity
    })

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setProductsFilter(products)
        }
    
    }, [products])
    

    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
        setInputValue(e.target.value)
    }

    const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to
    

  return (
    <div>
        <div className='container__buscador'>
          <input className='input__buscador' value={inputValue} onChange={handleChange} type="text" placeholder='search product' />
          <h2 className='color__lupa'><i class="fa-solid fa-magnifying-glass"></i></h2>
        </div>
        <FilterPrice setInputPrice={setInputPrice} />
        <FilterCategory setInputValue={setInputValue} />
        <ToOrderProducts />
        <div className='products-container'>
        {
          productsFilter?.filter(filterCallBack).length !== 0 ?
            productsFilter?.filter(filterCallBack).map(product => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))
          :
            <h1>Not exist products to this filter</h1>
        }

        </div>
    </div>
  )
}

export default Home