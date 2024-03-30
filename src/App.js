import { useState } from 'react'
import "./App.css";
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header";
import MyRoyte from "./routes/MyRoyte";


function App() {

	return (
		<div className='App'>
			<Header/>
			<MyRoyte />
			<Footer />

		</div>
	)
}

export default App;
