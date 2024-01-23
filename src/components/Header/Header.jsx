import "./Header.css";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { FiSearch , FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container header-wrapper">
                    <a href="/" className="header-logo-link">
                        <img src={Logo} alt="logo"/>
                    </a>
                    <div className="header-katalog">
                        <span className="header-katalog-ico"><FaBars/></span>
                        <p className="header-katalog-par">Каталог</p>
                    </div>
                    <div className="header-search">
                        <FiSearch />
                        <p className="header-search-prg">Поиск</p>
                        <p className="header-search-num">42903</p>
                    </div>
                    <div className="header-auth">
                        <a className="header-auth" href="/auth">
                            <div className="header-auth-left">
                                <p className="header-auth-top">Добро пожаловать</p>
                                <p className="header-auth-bottom">Вход/Регистрация</p>
                            </div>
                            <div className="header-auth-right">
                                <span className="header-auth-per"><IoPersonOutline/></span>
                            </div>
                        </a>
                        <span className="header-line"></span>
                        <div className="header-korzina">
                            <span className="header-korzina-ico"><FiShoppingCart/></span>
                            <p className="header-korzina-num">2</p>
                        </div>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}

export default Header;