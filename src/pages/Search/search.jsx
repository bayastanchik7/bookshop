import React, { useEffect, useState } from 'react'
import { useMainContext } from '../../context/ProductContext'

const Search = () => {
	const { value, readProduct, product } = useMainContext()

	let res = product.filter(el => {
		return el.name.toLowerCase().includes(value.toLowerCase())
	})

	useEffect(() => {
		readProduct()
	}, [])

	return (
		<div id='search'>
			<div className='container'>
				<div className='search'>
				
					{value && value.length > 0 ? (
						res.map(el => (
							<div>
								<img src={el.img} alt='' />
								<h1>{el.name}</h1>
							</div>
						))
					) : (
						<h1>Книга: {value} не существует!!!</h1>
					)}
				</div>
			</div>
		</div>
	)
}

export default Search
