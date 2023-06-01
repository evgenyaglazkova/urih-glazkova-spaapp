import { Link } from 'react-router-dom';

import './header.css';

export default function Header(){
    return(
        <nav>
          <div className='container'>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">SPA Project</Link>
              <ul id="nav-mobile" className='right hide-on-med-and-down'>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    );
}