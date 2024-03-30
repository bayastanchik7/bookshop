import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useMainContext } from '../../context/ProductContext'

const Kategory = () => {
	const { product, readProduct, removeData, setProduct } = useMainContext()
	const [more, setMore] = useState(5)
	const [state, setState] = useState('')

	let res = product.splice(0, more)

	let arr = product.filter(el => {
		return el.cat == state
	})

	useEffect(() => {
		readProduct()
	}, [])

	const navigate = useNavigate()
	return (
		<div id='kategory'>
			<div className='container'>
				<div className='kategory'>
					<div className='main'>
						<h1>Категории</h1>
						<div className='main2'>
							<div className='mainBlock'>
								<img
									src='https://s1.1zoom.ru/b5050/658/Castles_Halloween_Movies_Witch_Silhouette_554463_1600x1200.jpg'
									alt=''
								/>
								<h3>Фантастика</h3>
							</div>
							<div className='mainBlock'>
								<img
									src='https://static-web-0.kspu.ru/web/images/2021/02/05/7538722dd454b3f516d30137217dc8a1/shutterstock762804589-1000x5001_original.jpg'
									alt=''
								/>
								<h3>Наука</h3>
							</div>
						</div>
					</div>
					<div className='sorting'>
						<div className='rr'>
							<h2>Возможно, Вам понравится</h2>
						</div>
						<div className='tt'>
							<select
								className='select'
								name=''
								id=''
								onChange={e => setState(e.target.value)}
							>
								<option value='all'>Категории</option>
								<option value='all'>Все книги</option>
								<option value='Психология'>Психология</option>
								<option value='Фантастика'>Фантастика</option>
							</select>
						</div>
					</div>
					<div className='card'>
						{state == 'all' && state.length > 0
							? res.map((el, index) => (
									<div key={index} className='cardBox'>
										<div className='imgs'>
											<img src={el.img} alt='' />
											<div className='cardBLock'>
												<div>
													<h1>{el.name}</h1>
													<p>{el.price}сом</p>
												</div>
												<div
													style={{
														display: 'flex',
														alignItems: ' center',
														gap: '0px'
													}}
													className='btnss'
												>
													<button onClick={() => removeData(el.id)}>
														<MdDelete />
													</button>

													<button onClick={() => navigate(`/detail/${el.id}`)}>
														<FaEdit />
													</button>
												</div>
											</div>
										</div>
									</div>
							  ))
							: arr.map(el => (
									<div className='imgs'>
										<img
											style={{
												width: '300px',
												height: '400px',
												objectFit: 'cover'
											}}
											src={el.img}
											alt=''
										/>
										<div className='cardBLock'>
											<div>
												<h1>{el.name}</h1>
												<p>{el.price}сом</p>
											</div>
										</div>
									</div>
							  ))}
					</div>
					<button
						className='btnAdd'
						onClick={() => {
							setMore(more + 5)
						}}
					>
						Показать ещё
					</button>
				</div>
			</div>
		</div>
	)
}

export default Kategory
