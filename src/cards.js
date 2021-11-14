import './cards.css'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'



function Cards(){
    return(
        <div className="cards_main_div">
            <h1 className="heading">Custom Built Adobe XD Template </h1>
            <h1 className="heading">Download for Free</h1>
            <hr id="hr" />
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card" id="main-card">
                            <h5>Title 1</h5>
                            <img src={img1} alt="Not Found" />
                            <p id="card-para">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit 
                            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.</p>
                        </div>
                        <button>More Info</button>
                    </div>
                    <div className="col-4">
                    <div className="card" id="main-card">
                            <h5>Title 2</h5>
                            <img src={img2} alt="Not Found" />
                            <p id="card-para">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit 
                            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.</p>
                        </div>
                        <button>More Info</button>
                    </div>
                    <div className="col-4">
                    <div className="card" id="main-card">
                            <h5>Title 3</h5>
                            <img src={img3} alt="Not Found" />
                            <p id="card-para">Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit 
                            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit.</p>
                        </div>
                        <button>More Info</button>
                    </div>
                </div>
            </div>
            <hr id="hr" />
        </div>
    )
}

export default Cards;