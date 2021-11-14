import './App.css';
import Cards from './cards';
import Footer from './footer';
import Hdrimg from './header_img';
import Instacards from './insta_cards';
import Navbar from  './Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Hdrimg/>
      <Cards/>
      <Instacards/>
      <Footer/>
   
    </div>
  );
}

export default App;
