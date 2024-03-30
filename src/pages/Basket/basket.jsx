import React, { useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import './basket.scss'
import { useMainContext } from '../../context/ProductContext'

const Basket = () => {
	const { addBasketFunction, readBasket, addBasketLocalDelete } =
		useMainContext()

	useEffect(() => {
		addBasketFunction()
	}, [])

	console.log(readBasket)

	return (
		<div className='container'>
			<div className='box'>
				{readBasket?.map((el, index) => (
					<div key={index} className='blok'>
						<img src={el?.img} alt='' />
						<h1>{el?.name}</h1>
						<div className='bloks'>
							<p>{el?.price}сом</p>
							<button
								className='btns'
								onClick={() => addBasketLocalDelete(el.id)}
							>
								<MdDelete />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Basket
