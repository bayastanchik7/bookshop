import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import Hero from '../pages/Hero/Hero'
import Detail from '../pages/Detail/Detail'
import Basket from '../pages/Basket/basket'
import Search from '../pages/Search/search'
import Password from '../pages/password/password'

const MyRoyte = () => {
	const ROUTE = [
		{ path: '/', element: <Hero />, key: 1 },
		{ path: '/admin', element: <Admin />, key: 2 },
		{ path: '/detail/:id', element: <Detail />, key: 3 },
		{ path: '/basket', element: <Basket />, key: 4 },
		{ path: '/search', element: <Search />, key: 5 },
		{ path: '/password', element: <Password />, key: 6 }
	]
	return (
		<Routes>
			{ROUTE.map(el => (
				<Route path={el.path} element={el.element} key={el.key} />
			))}
		</Routes>
	)
}

export default MyRoyte
