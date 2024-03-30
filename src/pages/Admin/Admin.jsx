import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMainContext } from '../../context/ProductContext'
import './Admin.css'

const Admin = () => {
	const { addProduct } = useMainContext()
	const naviget = useNavigate()

	const [values, setValues] = useState({
		img: '',
		name: '',
		cat: '',
		price: '',
		descr: ''
	})

	const handleChange = e => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setValues({
			img: '',
			name: '',
			cat: '',
			price: '',
			descr: ''
		})
	}

	return (
		<div className='create-info'>
			<div className='container'>
				<div id='create'>
					<div className='create'>
						<form onSubmit={handleSubmit}>
							<div className='input-wrapper'>
								<input
									type='text'
									name='img'
									onChange={handleChange}
									placeholder='Выберите файл'
								/>
							</div>
							<div className='prodInfo'>
								<input
									type='text'
									name='name'
									value={values.name}
									onChange={handleChange}
									placeholder='Product name...'
								/>
								<div className='categor-price'>
									<select name='cat' value={values.cat} onChange={handleChange}>
										<option value={handleChange}>Фантастика</option>
										<option value={handleChange}>Психология</option>
									</select>
									<input
										type='text'
										name='price'
										value={values.price}
										onChange={handleChange}
										placeholder='price..'
									/>
								</div>
								<textarea
									className='descr'
									name='descr'
									value={values.descr}
									onChange={handleChange}
									placeholder='Product description...'
									cols='30'
									rows='10'
								></textarea>
								<div className='descr'>
									<button
										onClick={() => {
											addProduct(values)

											naviget('/')
										}}
										type='submit'
									>
										SAVE
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Admin
