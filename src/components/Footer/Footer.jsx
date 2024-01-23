import './Footer.css'
import FooterLogo from '../../assets/footerLogo.svg'
import AppStore from '../../assets/appStore.png'
import GooglePlay from '../../assets/googlePlay.png'
import WathsApp from '../../assets/whatsApp.png'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className='container footer-top'>
                <div className='footer-first'>
                    <img className='footer-logo' src={FooterLogo} alt="logo"/>
                    <p className='footer-first-pr'>Первый отечественный бренд <br /> Iskender на рынке сантехники от <br /> компании ОсОО «Стройдом.кг»</p>
                    <span className='footer-first-bot'>
                        <a className='footer-app' href="https://www.apple.com/app-store/">
                            <img src={AppStore} width={144} height={46} alt="App Store" />
                        </a>
                        <a className='footer-play' href="https://play.google.com/">
                            <img src={GooglePlay} width={145} height={46} alt="Google Play" />
                        </a>
                    </span>
                </div>
                <div className='footer-second'>
                    <h3 className='footer-second-title'>Адреса</h3>
                    <p className='footer-second-pr'>ЭлитСтрой</p>
                    <p className='footer-second-pr1'>ул. Ден-Сяопина 18/1</p>
                    <p className='footer-second-pr2'>Баткен</p>
                    <p className='footer-second-pr3'>ул. Льва-Толстого 19</p>
                    <p className='footer-second-pr4'>ТааТан</p>
                    <p className='footer-second-pr5'>ул. Лермонтова 6</p>
                </div>
                <div className="footer-third">
                    <h3 className="footer-third-title">Компания</h3>
                    <p className="footer-third-pr">Каталог</p>
                    <p className="footer-third-pr">Избранное</p>
                    <p className="footer-third-pr">Личный кабинет</p>
                </div>
                <div className="footer-four">
                    <h3 className="footer-four-title">Контакты</h3>
                    <p className="footer-four-pr">Email:</p>
                    <a className="footer-four-email" href="mailto: iskender.kg@gmail.com">iskender.kg@gmail.com</a>
                    <p className="footer-four-tel">Телефон:</p>
                    <a className='footer-four-telLink' href="tel: +996 (500) 000-104">+996 (500) 000-104</a>
                    <a className='footer-four-telLink' href="tel: +996 (997) 000-104">+996 (997) 000-104</a>
                    <a className='footer-four-telLink' href="tel: +996 (222) 000-104">+996 (222) 000-104</a>
                    <a className='footer-four-link' href="https://www.whatsapp.com/">
                        <img className='footer-four-img' width={125} height={29} src={WathsApp} alt="WhatsApp" />
                    </a>
                </div>
            </div>
            <div className='container footer-bottom'>
                <p className='footer-bottom-pr'>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
                <span className='footer-bottom-media'>
                    <a className='footer-bottom-ins' href="https://www.instagram.com/"><BsInstagram/></a>
                    <a className='footer-bottom-face' href="https://www.facebook.com/"><FaFacebook/></a>
                </span>
            </div>
        </div>
    )
}

export default Footer;