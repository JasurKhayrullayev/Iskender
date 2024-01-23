import './App.css';
import Header from './components/Header/Header';
import Resurs from './components/Resurs/Resurs';
import Category from './components/Categories/Category';
import Sale from './components/Sale/Sale';
import News from './components/News/News'
import Footer from './components/Footer/Footer';
import SaleProduct from './components/SaleProduct/SaleProduct';
import Address from './components/Address/Address';

function App() {
  return (
    <div>
      <Header/>
      <Resurs/>
      <Category/>
      <Sale/>
      <News/>
      <SaleProduct/>
      <Address/>
      <Footer/>
    </div>
  );
}

export default App;
