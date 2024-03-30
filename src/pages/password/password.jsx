import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Password = () => {
	const [password, setPassword] = useState('book')
	const [name, setName] = useState('book')
	const [nameInput, setNameInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const navieget = useNavigate()

	return (
		<div id='password'>
			<div className='container'>
				<div className='password'>
					<input
						onChange={e => setNameInput(e.target.value)}
						type='text'
						placeholder='name..'
					/>
					<input
						onChange={e => setPasswordInput(e.target.value)}
						type='password'
						placeholder='password..'
					/>
					<button
						onClick={() => {
							if (password == password && name == nameInput) {
								return navieget('/admin')
							} else {
								alert('ошибка')
							}
						}}
					>
						create
					</button>
				</div>
			</div>
		</div>
	)
}

export default Password
