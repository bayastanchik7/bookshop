import axios from 'axios'
import { createContext, useContext, useState } from 'react'

const Context = createContext()
export const useMainContext = () => useContext(Context)

const ProductContext = ({ children }) => {
	const API = 'http://localhost:3000/data'

	const [counter, setCounter] = useState(0)

	const [product, setProduct] = useState([])
	const [readBasket, setreadBasket] = useState(null)
	const [value, setValue] = useState('')

	async function addProduct(newObj) {
		await axios.post(API, newObj)
		readProduct()
	}

	async function readProduct() {
		let { data } = await axios(API)
		setProduct(data)
	}

	async function removeData(id) {
		await axios.delete(`${API}/${id}`)
	}
	function addBasketLocal(product) {
		let data = JSON.parse(localStorage.getItem('data')) || []
		if (!data.some(item => item.id === product.id)) {
			data.push(product)
			localStorage.setItem('data', JSON.stringify(data))
			addBasketFunction()
		} else {
			alert('Продукт уже есть в корзине')
		}
	}

	function addBasketFunction() {
		let data = JSON.parse(localStorage.getItem('data')) || []
		setreadBasket(data)
	}

	function addBasketLocalDelete(id) {
		let data = JSON.parse(localStorage.getItem('data')) || []
		data = data.filter(el => el.id !== id)
		localStorage.setItem('data', JSON.stringify(data))
		addBasketFunction()
	}

	const values = {
		addProduct,
		readProduct,
		product,
		removeData,
		setProduct,
		addBasketLocal,
		addBasketFunction,
		readBasket,
		addBasketLocalDelete,
		counter,
		setCounter,
		value,
		setValue
	}
	return <Context.Provider value={values}>{children}</Context.Provider>
}

export default ProductContext
