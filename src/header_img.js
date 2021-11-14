import img from './img/hdrimg.jpg'
import './hdrimg.css'

function Hdrimg (){
    return(
        <img className="img_set" src={img} alt="Not Found"  />
    );
}

export default Hdrimg;