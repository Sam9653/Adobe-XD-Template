import './insta_cards.css'
import insta_img1 from './img/insta_img1.jpg'
import insta_img2 from './img/insta_img2.jpg'
import insta_img3 from './img/insta_img3.jpg'
import insta_img4 from './img/insta_img4.jpg'
import img1 from './img/insta.jpg'

function Instacards(){
    return(
        <div className="insta_cards">
        <h1 id="heading">Instagram Instagram</h1>
        <br /><br />
        <div className="container">
        <img src={insta_img1} alt="Not Found" id="insta_img1" />
        <img src={insta_img2} alt="Not Found" id="insta_img2" />
        <img src={insta_img3} alt="Not Found" id="insta_img3" />
        <img src={insta_img4} alt="Not Found" id="insta_img4" />
        <img src={img1} alt="Not Found" id="img1" />
        </div>
        </div>
    );
}

export default Instacards;