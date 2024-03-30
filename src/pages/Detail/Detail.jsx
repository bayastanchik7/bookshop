import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
import { useMainContext } from '../../context/ProductContext'

const Detail = () => {
	const { counter, setCounter, product, addBasketLocal } = useMainContext()

	const { id } = useParams()
	const [count, setCount] = useState(1)

	let detalProduct = product.filter(el => {
		return el.id == id
	})

	if (count < 1) {
		setCount(1)
	}

	return (
		<div>
			<section id='detaile'>
				<div className='container'>
					<h3 className='detaileH3'>
						Главная / Психология / Montana Oversize T-shirt AFRRSJDHSVOUYVE{' '}
					</h3>
					{detalProduct.map(el => (
						<div className='detaile'>
							<img src={el.img} alt='' />
							<div className='detaileInformations'>
								<h3>{el.name}</h3>
								<h4>{el.price * count} сом </h4>
								<h5>Жанр: </h5>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '10px'
									}}
								>
									<button
										style={{
											width: '40px',
											height: '20px',
											outline: 'none'
										}}
										onClick={() => setCount(count => count - 1)}
									>
										-
									</button>
									<h4>{count}</h4>
									<button
										style={{
											width: '40px',
											height: '20px',
											outline: 'none'
										}}
										onClick={() => setCount(count => count + 1)}
									>
										+
									</button>
								</div>
								<h3 cl>Описание</h3>
								<p>{el.descr}</p>
								<button
									onClick={() => {
										addBasketLocal(el !== '' ? el : '')
										setCounter(counter + 1)
									}}
									className='baskets'
								>
									Добавить в корзину
								</button>
								<br />
								<button className='now'>Купить сейчас</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Detail
