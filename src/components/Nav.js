
import './Nav.css';
import menuimg from './menuimg.png'
import bookimg from './bookimg.png'

function Nav() {
    return (
        <div className="nav">
            <div className="nav-menu"  >
                <i><img src={menuimg} /></i>
            </div>
            <div className="nav-book"  >
            <i><img src={bookimg}/></i>
            </div>
        </div>
    );
}

export default Nav;
