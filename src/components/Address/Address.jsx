import './Address.css'
import AddressLogo from "../../assets/addresLogo.svg"
import { FiArrowRight } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TbPhone } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";

function Address() {
    return (
    <div className='container address-wrapper'>
        <h2 className='address'>Адреса магазинов</h2>
        <ul className='address-list'>
            <li className='address-list-item'>
                <div className='address-list-top'>
                    <div className='address-list-topIt'>
                        <img className='address-list-topImg' src={AddressLogo} alt="logo" />
                        <div className='address-list-topWr'>
                            <h3 className='address-list-topTit'>Iskender home</h3>
                            <a className='address-list-topMap' href="/map">открыть в карте</a>
                        </div>
                    </div>
                    <button className='address-list-topBtn'><FiArrowRight/></button>
                </div>
                <div className='address-name'>
                    <span className='address-name-ico'><CiLocationOn/></span>
                    <p className='address-name-pr'>Кыргызстан, г. Бишкек <br/> ул. Турусбекова A167</p>
                </div>
                <div className='address-bottom'>
                    <div className='address-time'>
                        <span className='address-time-ico'><FaRegClock/></span>
                        <p className='address-time-num'>08:00 - 22:00</p>
                    </div>
                    <div className='address-phone'>
                        <span className='address-phone-ico'><TbPhone/></span>
                        <a className='address-phone-num' href="tel:+996 500 345 345">+996 500 345 345</a>
                    </div>
                </div>
            </li>
            <li className='address-list-item'>
                <div className='address-list-top'>
                    <div className='address-list-topIt'>
                        <img className='address-list-topImg' src={AddressLogo} alt="logo" />
                        <div className='address-list-topWr'>
                            <h3 className='address-list-topTit'>Iskender home</h3>
                            <a className='address-list-topMap' href="/map">открыть в карте</a>
                        </div>
                    </div>
                    <button className='address-list-topBtn'><FiArrowRight/></button>
                </div>
                <div className='address-name'>
                    <span className='address-name-ico'><CiLocationOn/></span>
                    <p className='address-name-pr'>Кыргызстан, г. Бишкек <br/> ул. Турусбекова A167</p>
                </div>
                <div className='address-bottom'>
                    <div className='address-time'>
                        <span className='address-time-ico'><FaRegClock/></span>
                        <p className='address-time-num'>08:00 - 22:00</p>
                    </div>
                    <div className='address-phone'>
                        <span className='address-phone-ico'><TbPhone/></span>
                        <a className='address-phone-num' href="tel:+996 500 345 345">+996 500 345 345</a>
                    </div>
                </div>
            </li>
            <li className='address-list-item'>
                <div className='address-list-top'>
                    <div className='address-list-topIt'>
                        <img className='address-list-topImg' src={AddressLogo} alt="logo" />
                        <div className='address-list-topWr'>
                            <h3 className='address-list-topTit'>Iskender home</h3>
                            <a className='address-list-topMap' href="/map">открыть в карте</a>
                        </div>
                    </div>
                    <button className='address-list-topBtn'><FiArrowRight/></button>
                </div>
                <div className='address-name'>
                    <span className='address-name-ico'><CiLocationOn/></span>
                    <p className='address-name-pr'>Кыргызстан, г. Бишкек <br/> ул. Турусбекова A167</p>
                </div>
                <div className='address-bottom'>
                    <div className='address-time'>
                        <span className='address-time-ico'><FaRegClock/></span>
                        <p className='address-time-num'>08:00 - 22:00</p>
                    </div>
                    <div className='address-phone'>
                        <span className='address-phone-ico'><TbPhone/></span>
                        <a className='address-phone-num' href="tel:+996 500 345 345">+996 500 345 345</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    )
}

export default Address;