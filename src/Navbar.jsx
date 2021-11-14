import "./Navbar.css"
import { BrowserRouter , Route , Link ,Switch} from "react-router-dom";
import home from "./Home";
import about from "./About";
import contact from "./Contact";
const Navbar = () => {
    return(
        <BrowserRouter >
        <div className="main">
            <nav className="nav">
                <h3 id="navbar_brand">INTERIOR DESIGN</h3>
     <ul className='list'>
         <Link to="/Home" className="link">ABOUT         
         </Link>
         <Link to="/About" className="link">PORTFOLIO         
         </Link>
         <Link to="/Contact" className="link">TESTIMONIALS         
         </Link>
         <Link to="/Blog" className="linkk">BLOG         
         </Link>
         <Link to="/Blog" className="link">CONTACT         
         </Link>
     </ul>
            </nav>
        </div>
        <Switch>
            <Route path="/Home" component={home} />
            <Route path="/About" component={about} />
            <Route path="/Contact" component={contact} />
        </Switch>
        </BrowserRouter>
    );

}
export default Navbar;