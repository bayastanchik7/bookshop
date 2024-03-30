import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
	return (
		<footer>
			<div id='footer'>
				<div className='container'>
					<div className='footer'>
						<div className='shops'>
							<h1>BOOKShop</h1>
						</div>
						<div className='way'>
							<h6>Способ оплаты</h6>
							<h6>Условия доставки</h6>
							<h6>Правила покупки</h6>
						</div>
						<div className='faq'>
							<h4>FAQ </h4>
							<h4>О нас</h4>
						</div>
						<div className='block'>
							<h4>Связаться с нами</h4>
							<h4>+996 222 533 735</h4>
							<h4>+996 222 533 735</h4>
							<h4>+996 222 533 735</h4>
							<div className='iconssss'>
								<a
									href='https://www.instagram.com/abdkdrwna/'
									target='_blank'
									style={{
										color: 'white'
									}}
								>
									<FaInstagram />
								</a>
								<a
									href='https://web.telegram.org/k/'
									target='_blank'
									style={{ color: 'white' }}
								>
									{' '}
									<FaTelegram />
								</a>
								<a
									href='https://web.whatsapp.com/'
									target='_blank'
									style={{
										color: 'white'
									}}
								>
									<FaWhatsapp />
								</a>
								<a
									href='https://www.facebook.com/?locale=ru_RU'
									target='_blank'
									style={{
										color: 'white'
									}}
								>
									{' '}
									<FaFacebook />
								</a>
							</div>
						</div>
						<div className='adres'>
							<h3>Адрес</h3>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d93581.67913808484!2d74.6094592!3d42.8638208!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d46.2065354!2d31.9128619!4m3!3m2!1d50.906!2d34.793991999999996!5e0!3m2!1sru!2skg!4v1710938432143!5m2!1sru!2skg'
								frameborder='0'
								width={200}
								height={100}
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
