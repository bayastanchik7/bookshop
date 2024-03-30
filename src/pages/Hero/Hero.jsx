import React, { useEffect, useState } from 'react'
import Kategory from '../Kategory/Kategory'
import './hero.css'
import { useMainContext } from '../../context/ProductContext'

const Hero = () => {
	const [imgs, setImgs] = useState(0)
	let bakdrop = [
		`https://media.istockphoto.com/id/1492792958/vector/banner-design-with-push-toys-teddy-bear-plush-bunnies.jpg?s=1024x1024&w=is&k=20&c=bVnS5VqyYLevZAg3ALlRzlge6-062kZqiqgE2taoVIU=`,
		`https://media.istockphoto.com/id/1316920204/vector/promo-sale-banner-with-stack-of-books-glasses-blanket-candle-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=URGh5YFwObwFt15egLZLbcknnh4cEqMp4CFg33AAuO0=`,
		`https://media.istockphoto.com/id/1316920207/vector/promo-sale-banner-with-books-decorative-house-potted-plant-bookstore-bookshop-library-book.jpg?s=2048x2048&w=is&k=20&c=vvnWzueY8MKNW9lW36NoLItSq0D1QzOnVyEsi6-JGqk=`,
		`https://media.istockphoto.com/id/1600278077/vector/banner-design-with-cat-sitting-with-blanket-and-teacup.jpg?s=2048x2048&w=is&k=20&c=NBdTUSmAth54DCk4NAjyaswlT_7b8ecU8Bcqlg72yPc=`
	]

	useEffect(() => {
		const interval = setTimeout(() => {
			let res = Math.floor(Math.random() * 4)
			setImgs(res)
		}, 5500)
		return () => clearTimeout(interval)
	}, [imgs])

	const { readProduct, product } = useMainContext()

	useEffect(() => {
		readProduct()
	}, [product])

	return (
		<div id='hero'>
			<div className='hero'>
				<img className='imgess' src={bakdrop[imgs]} alt='' />
			</div>
			<Kategory />
		</div>
	)
}

export default Hero
